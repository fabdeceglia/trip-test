import { Injectable, signal, WritableSignal } from '@angular/core';
import { TripSearchFilter } from '../../models/trip.filter.model';

@Injectable({
  providedIn: 'root'
})
export class TripFilterService {

  private filter: WritableSignal<TripSearchFilter> = signal({field: null, sort: null});

  setFilter(filter: TripSearchFilter): void {
    this.filter.set(filter);
  }

  getFilterValue(): TripSearchFilter {
    return this.filter();
  }

  resetFilter(): void {
    this.filter.set({field: null, sort: null});
  }

  filterIsEmpty(): boolean {
    return !this.filter().field && this.filter().sort === null;
  }

}
