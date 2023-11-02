import { Injectable } from '@angular/core';
import { TelemetryHistoryApiService } from './telemetry-history-api.service';
import { TelemetryHistory } from '../interfaces/telemetry-history';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelemetryHistoryService {

  constructor(private telemetryApiService: TelemetryHistoryApiService) { }

  getProcessedTelemetryData(rocket_code: string, stage_code: string): Observable<TelemetryHistory[]> {
    return this.telemetryApiService.getTelemetryHistory(rocket_code, stage_code).pipe(
      map(data => {
        console.log("history data for testing", data);
        // Any processing can be done here, for now, we're just returning the data as-is
        return data;
      })
    );
  }
}
