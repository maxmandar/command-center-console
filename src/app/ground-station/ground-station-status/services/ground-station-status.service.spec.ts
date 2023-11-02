import { TestBed } from '@angular/core/testing';

import { GroundStationStatusService } from './ground-station-status.service';

describe('GroundStationStatusService', () => {
  let service: GroundStationStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroundStationStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
