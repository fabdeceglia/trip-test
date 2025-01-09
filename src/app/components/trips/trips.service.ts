import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { filter, map } from 'rxjs';
import { TripsPage } from '../../models/trips.page.model';
import { Trip } from '../../models/trip.model';
import { TripSearchFilter } from '../../models/trip.filter.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private backendService: BackendService = inject(BackendService);

  private pageIndex = 1;

  trips: WritableSignal<Array<Trip>> = signal([]);
  fetchingTrips: WritableSignal<boolean> = signal(false);

  fetchTrips(searchFilter?: TripSearchFilter): void {
    this.backendService.fetchTrips(this.pageIndex, searchFilter)
    .pipe(
      filter((page: TripsPage) => page.items.length > 0),
      map((page: TripsPage) => page.items)
    ).subscribe({
      next: (trips: Array<Trip>) => {
        this.trips.set([...this.trips(), ...trips]);
        this.pageIndex++;
      },
      complete: () => this.fetchingTrips.set(false),
      error: () => this.fetchingTrips.set(false)
    });
  }

  resetSearch(): void {
    this.pageIndex = 1;
    this.trips.set([]);
  }

}
