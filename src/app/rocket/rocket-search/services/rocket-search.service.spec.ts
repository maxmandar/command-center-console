import { TestBed } from '@angular/core/testing';

import { RocketSearchService } from './rocket-search.service';

describe('RocketSearchService', () => {
  let service: RocketSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
