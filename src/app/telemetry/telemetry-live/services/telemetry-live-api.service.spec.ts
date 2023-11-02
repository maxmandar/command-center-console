import { TestBed } from '@angular/core/testing';

import { TelemetryLiveApiService } from './telemetry-live-api.service';

describe('TelemetryLiveApiService', () => {
  let service: TelemetryLiveApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelemetryLiveApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
