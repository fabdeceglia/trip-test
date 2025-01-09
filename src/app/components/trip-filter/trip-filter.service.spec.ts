import { TestBed } from '@angular/core/testing';

import { TripFilterService } from './trip-filter.service';
import { SortingFilterEnum, TripFilterEnum, TripSearchFilter } from '../../models/trip.filter.model';

describe('TripFilterService', () => {
  let service: TripFilterService;
  let filter: TripSearchFilter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    
    filter = {
      field: TripFilterEnum.PRICE,
      sort: SortingFilterEnum.ASC
    };

    service = TestBed.inject(TripFilterService);
    service.setFilter(filter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get', () => {
    expect(service).toBeTruthy();
    const settedFilter =  service.getFilterValue();
    expect(settedFilter).toEqual(filter);
  });

  it('should reset', () => {
    expect(service).toBeTruthy();
    service.resetFilter();
    const settedFilter =  service.getFilterValue();
    expect(settedFilter).toEqual({field: null, sort: null});
  });

  it('should check emptiness', () => {
    expect(service).toBeTruthy();
    
    expect(service.filterIsEmpty).toBeFalse;
    
    service.resetFilter();
    expect(service.filterIsEmpty).toBeTrue;
  });


});
