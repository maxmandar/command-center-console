import { Component, OnInit } from '@angular/core';
import { TelemetryTableService } from '../../services/telemetry-table.service';
import { Telemetry } from '../../interfaces/telemetry-table';
import { MatTableDataSource } from '@angular/material/table';
import 'chartjs-plugin-annotation';

@Component({
  selector: 'app-telemetry-table',
  templateUrl: './telemetry-table.component.html',
  styleUrls: ['./telemetry-table.component.css']
})
export class TelemetryTableComponent implements OnInit {
  displayedColumns: string[] = ['rocket_code', 'stage_code', 'speed', 'temperature', 'timestamp'];
  dataSource = new MatTableDataSource();

  
  

  chartData: any[] = [{
    data: [],
    label: 'Speed'
  }];

  chartLabels: string[] = [];
  
  chartOptions: any = {
    responsive: true,
    
  };

  chartColors: Array<any> = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.3)',
    }
  ];

  constructor(private telemetryService: TelemetryTableService) { }

  ngOnInit(): void {
    console.log("Telemetry Table Component Initialized");
    this.telemetryService.getTelemetryData().subscribe(data => {
      console.log("Telemetry Data Received");
      console.log(data);
      this.dataSource.data = data;

      // this.chartLabels = data.map((d: Telemetry) => d.timestamp.toISOString());
      this.chartLabels = data.map((d: Telemetry) => new Date(d.timestamp).toISOString());

      this.chartData[0].data = data.map((d: Telemetry) => d.speed);

    });

      // Log the structured chartData here
      console.log("Transformed Chart Data:");
      console.log(this.chartData);


  }
}
