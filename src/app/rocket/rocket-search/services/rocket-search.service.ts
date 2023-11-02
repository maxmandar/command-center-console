import { Injectable } from '@angular/core';
import { RocketSearchApiService } from './rocket-search-api.service';
import { BehaviorSubject } from 'rxjs';
import { Rocket, Stage } from '../interfaces/rocket-search';

@Injectable({
  providedIn: 'root'
})
export class RocketSearchService {

  private selectedRocketAndStageSubject = new BehaviorSubject<{ rocket: Rocket, stage: Stage } | null>(null);
  selectedRocketAndStage$ = this.selectedRocketAndStageSubject.asObservable();

 constructor(private apiService: RocketSearchApiService) { }

 getRockets() {
  return this.apiService.getRockets();
}

updateSelectedRocketAndStage(rocket: Rocket, stage: Stage): void {
  this.selectedRocketAndStageSubject.next({ rocket, stage });
}

getSelectedRocketAndStage(): { rocket: Rocket, stage: Stage } | null {
  return this.selectedRocketAndStageSubject.getValue();
}

}
