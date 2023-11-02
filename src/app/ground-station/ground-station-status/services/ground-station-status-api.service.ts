import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroundStationStatusApiService {

  constructor(private http: HttpClient) { }

  getGroundStations() {
    return this.http.get(environment.ground_station_base_url);
  }

}
