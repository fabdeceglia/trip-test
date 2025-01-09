import { TestBed } from '@angular/core/testing';

import { TripOfTheDayService } from './trip-of-the-day.service';

describe('TripOfTheDayService', () => {
  let service: TripOfTheDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripOfTheDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
