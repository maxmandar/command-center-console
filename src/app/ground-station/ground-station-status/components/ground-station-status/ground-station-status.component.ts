import { Component, OnInit } from '@angular/core';
import { GroundStationStatusService } from '../../services/ground-station-status.service';
import { GroundStationStatus } from '../../interfaces/ground-station-status';

@Component({
  selector: 'app-ground-station-status',
  templateUrl: './ground-station-status.component.html',
  styleUrls: ['./ground-station-status.component.css']
})
export class GroundStationStatusComponent implements OnInit {

  groundStations: GroundStationStatus[] = [];

  constructor(private service: GroundStationStatusService) { }

  ngOnInit(): void {
    this.service.fetchGroundStations().subscribe(data => {
      this.groundStations = data as GroundStationStatus[];
    });
  }
}
