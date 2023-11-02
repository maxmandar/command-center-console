import { TestBed } from '@angular/core/testing';

import { GroundStationStatusApiService } from './ground-station-status-api.service';

describe('GroundStationStatusApiService', () => {
  let service: GroundStationStatusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroundStationStatusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
