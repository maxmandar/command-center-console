import { TestBed } from '@angular/core/testing';

import { TelemetryHistoryService } from './telemetry-history.service';

describe('TelemetryHistoryService', () => {
  let service: TelemetryHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelemetryHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
