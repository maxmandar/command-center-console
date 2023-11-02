import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelemetryHistory } from '../interfaces/telemetry-history';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelemetryHistoryApiService {

  private readonly baseUrl = environment.telemetry_base_url;



  constructor(private http: HttpClient) {}

  getTelemetryHistory(rocket_code: string, stage_code: string): Observable<TelemetryHistory[]> {
    return this.http.get<TelemetryHistory[]>(`${this.baseUrl}?rocket_code=${rocket_code}&stage_code=${stage_code}`);
  }
}