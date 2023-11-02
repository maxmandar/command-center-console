import { TestBed } from '@angular/core/testing';

import { TelemetryHistoryApiService } from './telemetry-history-api.service';

describe('TelemetryHistoryApiService', () => {
  let service: TelemetryHistoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelemetryHistoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
