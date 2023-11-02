import { TestBed } from '@angular/core/testing';

import { TelemetryTableService } from './telemetry-table.service';

describe('TelemetryTableService', () => {
  let service: TelemetryTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelemetryTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
