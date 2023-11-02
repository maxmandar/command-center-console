import { Injectable } from '@angular/core';
import { GroundStationStatusApiService } from './ground-station-status-api.service';

@Injectable({
  providedIn: 'root'
})
export class GroundStationStatusService {

  constructor(private apiService: GroundStationStatusApiService) { }

  fetchGroundStations() {
    return this.apiService.getGroundStations();
  }
}
