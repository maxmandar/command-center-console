import { Component, OnInit } from '@angular/core';
import { Rocket, Stage } from '../../interfaces/rocket-search';
import { RocketSearchService } from '../../services/rocket-search.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-rocket-search',
  templateUrl: './rocket-search.component.html',
  styleUrls: ['./rocket-search.component.css']
})
export class RocketSearchComponent implements OnInit {
  rockets: Rocket[] = [];
  rocketControl = new FormControl();
  filteredRocketsAndStages: Observable<{ rocket: Rocket, stage: Stage }[]> | undefined;

  selectedRocketAndStage: { rocket: Rocket, stage: Stage } | null = null;

  constructor(private rocketService: RocketSearchService) {}

  ngOnInit(): void {
    this.rocketService.getRockets().subscribe(rockets => {
      this.rockets = rockets;
      this.filteredRocketsAndStages = this.rocketControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.getAllRocketsAndStages())
      );
    });
  }

  private _filter(name: string): { rocket: Rocket, stage: Stage }[] {
    const filterValue = name.toLowerCase();
    const results: { rocket: Rocket, stage: Stage }[] = [];
    
    this.rockets.forEach(rocket => {
      const rocketMatch = rocket.name.toLowerCase().includes(filterValue);
      rocket.stages.forEach(stage => {
        if (rocketMatch || stage.name.toLowerCase().includes(filterValue)) {
          results.push({ rocket: rocket, stage: stage });
        }
      });
    });

    return results;
  }

  private getAllRocketsAndStages(): { rocket: Rocket, stage: Stage }[] {
    const results: { rocket: Rocket, stage: Stage }[] = [];
    this.rockets.forEach(rocket => {
      rocket.stages.forEach(stage => {
        results.push({ rocket: rocket, stage: stage });
      });
    });
    return results;
  }

  displayFn(item: { rocket: Rocket, stage: Stage }): string {
    return item && item.rocket.name && item.stage.name
      ? `${item.rocket.name} > ${item.stage.name}`
      : '';
  }

  onSelectionChanged(event: any): void {
    console.log('onSelectionChanged event:', event);
    const selected = event.option.value;
    if (selected && selected.rocket && selected.stage) {
      this.rocketService.updateSelectedRocketAndStage(selected.rocket, selected.stage);
    }
  }

  getSelectedRocketAndStage(): void | null {
    this.selectedRocketAndStage = this.rocketService.getSelectedRocketAndStage();
    
  }

}
