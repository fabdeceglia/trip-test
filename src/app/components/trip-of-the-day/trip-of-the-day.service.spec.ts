import { TestBed } from '@angular/core/testing';

import { TripOfTheDayService } from './trip-of-the-day.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BackendService } from '../../services/backend.service';

describe('TripOfTheDayService', () => {
  let service: TripOfTheDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), BackendService], 
    });
    service = TestBed.inject(TripOfTheDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
