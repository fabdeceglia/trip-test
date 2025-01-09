import { TestBed } from '@angular/core/testing';

import { TripsService } from './trips.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BackendService } from '../../services/backend.service';

describe('TripsService', () => {
  let service: TripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendService, provideHttpClientTesting()], 
    });
    service = TestBed.inject(TripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
