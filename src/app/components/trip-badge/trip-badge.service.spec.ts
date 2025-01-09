import { TestBed } from '@angular/core/testing';

import { TripBadgeService } from './trip-badge.service';

describe('TripBadgeService', () => {
  let service: TripBadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripBadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
