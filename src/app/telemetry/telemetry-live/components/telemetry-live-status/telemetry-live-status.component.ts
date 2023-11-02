import { Component, OnInit } from '@angular/core';
import { TelemetryLiveService } from '../../services/telemetry-live.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-telemetry-live-status',
  templateUrl: './telemetry-live-status.component.html',
  styleUrls: ['./telemetry-live-status.component.css']
})
export class TelemetryLiveStatusComponent implements OnInit {

  isConnected: boolean = false;
  private subscription!: Subscription;

  constructor(private telemetryService: TelemetryLiveService) {}

  ngOnInit(): void {
    this.subscription = this.telemetryService.getConnectionStatus().subscribe(
      isConnected => this.isConnected = isConnected
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
