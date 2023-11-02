import { TestBed } from '@angular/core/testing';

import { TelemetryLiveService } from './telemetry-live.service';

describe('TelemetryLiveService', () => {
  let service: TelemetryLiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelemetryLiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
