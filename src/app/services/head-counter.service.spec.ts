import { TestBed } from '@angular/core/testing';

import { HeadCounterService } from './head-counter.service';

describe('HeadCounterService', () => {
  let service: HeadCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
