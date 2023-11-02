import { TestBed } from '@angular/core/testing';

import { TelemetryTableApiService } from './telemetry-table-api.service';

describe('TelemetryTableApiService', () => {
  let service: TelemetryTableApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelemetryTableApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
