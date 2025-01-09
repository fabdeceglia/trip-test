import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Trip } from '../../models/trip.model';
import { tap } from 'rxjs';

interface TripOfTheDayCacheItem {
  trip: Trip,
  date: Date
}

@Injectable({
  providedIn: 'root'
})
export class TripOfTheDayService {

  private readonly LOCAL_STORAGE_KEY = 'TRIP_OF_THE_DAY';

  private backendService: BackendService = inject(BackendService);
  tripOfTheDay: WritableSignal<Trip | null> = signal(null);


  getTripOfTheDay(): void {
    const cached = this.getCachedTripOfTheDay();
    if (cached) {
      this.tripOfTheDay.set(cached);
    } else {
      this.backendService.getTripOfTheDay()
        .pipe(
          tap((trip: Trip) => this.cacheTripOfTheDay(trip))
        )
        .subscribe((tripOfTheDay: Trip) => this.tripOfTheDay.set(tripOfTheDay))
    }
  }

  private cacheTripOfTheDay(trip: Trip): void {
    const cacheItem: TripOfTheDayCacheItem = {
      trip,
      date: new Date()
    }
    window.localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(cacheItem));
  }

  private resetTripOfTheDayCache(): void {
    window.localStorage.removeItem(this.LOCAL_STORAGE_KEY);
  }

  private getCachedTripOfTheDay(): Trip | null {
    const cached = window.localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (cached) {
      const cacheItem = JSON.parse(cached) as TripOfTheDayCacheItem;
      return this.cachedTripOfTheDayIsValid(cacheItem) ? cacheItem.trip : null;
    } else {
      return null;
    }
  }

  private cachedTripOfTheDayIsValid(cacheItem: TripOfTheDayCacheItem): boolean {
    const today = new Date().toLocaleDateString();
    const cachedDate = new Date(cacheItem.date).toLocaleDateString();
    return today === cachedDate;
  }


}
