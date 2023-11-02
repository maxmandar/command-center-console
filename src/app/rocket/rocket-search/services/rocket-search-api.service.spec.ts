import { TestBed } from '@angular/core/testing';

import { RocketSearchApiService } from './rocket-search-api.service';

describe('RocketSearchApiService', () => {
  let service: RocketSearchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketSearchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
