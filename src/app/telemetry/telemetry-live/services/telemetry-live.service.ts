import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TelemetryLiveApiService } from './telemetry-live-api.service';
import { TelemetryLive } from '../interfaces/telemetry-live';


@Injectable({
  providedIn: 'root'
})
export class TelemetryLiveService {
  private telemetryDataSubject = new BehaviorSubject<TelemetryLive[]>([]);
  telemetryData$ = this.telemetryDataSubject.asObservable();

  private connectionStatusSubject = new BehaviorSubject<boolean>(false);
  connectionStatus$ = this.connectionStatusSubject.asObservable();

  constructor(private telemetryLiveApiService: TelemetryLiveApiService) {
    this.telemetryLiveApiService.connect();

    this.updateConnectionStatus();

    this.telemetryLiveApiService.getTelemetryData().subscribe(response => {
      console.log("Telemetry Data Received for live",response);
      const telemetryData = response;
      const currentData = this.telemetryDataSubject.value;
      this.telemetryDataSubject.next([...currentData, telemetryData]);
      this.updateConnectionStatus();
    });
  }

  getTelemetryData(): Observable<TelemetryLive[]> {
    return this.telemetryData$;
  }

  private updateConnectionStatus(): void {
    const isConnected = this.telemetryLiveApiService.isConnected();
    this.connectionStatusSubject.next(isConnected);
  }

  getConnectionStatus(): Observable<boolean> {
    return this.connectionStatus$;
  }

}
