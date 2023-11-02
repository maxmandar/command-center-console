import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TelemetryTableApiService } from './telemetry-table-api.service';

import { Telemetry } from '../interfaces/telemetry-table';

@Injectable({
  providedIn: 'root'
})
export class TelemetryTableService {
  private telemetryDataSubject = new BehaviorSubject<any[]>([]);
  telemetryData$ = this.telemetryDataSubject.asObservable();

  constructor(private apiService: TelemetryTableApiService) {
    this.apiService.connect();
    this.apiService.getTelemetryData().subscribe(response => {
      const telemetryData = response.telemetry_data;
      const currentData = this.telemetryDataSubject.value;
      this.telemetryDataSubject.next([...currentData, telemetryData]);
    });
  }

  getTelemetryData(): Observable<any[]> {
    return this.telemetryData$;
  }
}
