import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TelemetryLiveService } from '../../services/telemetry-live.service';
import { TelemetryLive } from '../../interfaces/telemetry-live';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-telemetry-live',
  templateUrl: './telemetry-live.component.html',
  styleUrls: ['./telemetry-live.component.css']
})
export class TelemetryLiveComponent implements OnInit {

  displayedColumns: string[] = ['rocket_code', 'stage_code', 'speed', 'temperature', 'timestamp'];
  dataSource = new MatTableDataSource();

  constructor(private telemetryLiveService: TelemetryLiveService) { }

  ngOnInit(): void {
    console.log("Telemetry Live Component Initialized");
    this.telemetryLiveService.getTelemetryData().subscribe(data => {
      console.log("Telemetry Data Received");
      console.log(data);
      this.dataSource.data = data;
    });
  }

}
