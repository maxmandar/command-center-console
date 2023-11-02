import { Component, OnInit } from '@angular/core';
import 'chartjs-plugin-annotation';
import { MatTableDataSource } from '@angular/material/table';
import { TelemetryLiveService } from '../../services/telemetry-live.service';
import { TelemetryLive } from '../../interfaces/telemetry-live';

@Component({
  selector: 'app-telemetry-live-chart',
  templateUrl: './telemetry-live-chart.component.html',
  styleUrls: ['./telemetry-live-chart.component.css']
})
export class TelemetryLiveChartComponent implements OnInit {

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

  
  constructor(private telemetryLiveService: TelemetryLiveService) { }

  ngOnInit(): void {
    this.telemetryLiveService.getTelemetryData().subscribe(data => {
    
      this.chartLabels = data.map((d: TelemetryLive) => new Date(d.timestamp).toISOString());

      this.chartData[0].data = data.map((d: TelemetryLive) => d.speed);

    });



  }

}
