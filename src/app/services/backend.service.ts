import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripsPage } from '../models/trips.page.model';
import { Trip } from '../models/trip.model';
import { TripSearchFilter } from '../models/trip.filter.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseEndpoint = `https://iy3ipnv3uc.execute-api.eu-west-1.amazonaws.com/Prod/v1/trips/`;
  private tripOfTheDayEndpoint = `${this.baseEndpoint}random/trip-of-the-day`;

  private readonly PAGE_SIZE = 50;

  constructor(
    private httpClient: HttpClient
    ) { }

  fetchTrips(pageIndex: number, filter?: TripSearchFilter): Observable<TripsPage> {
    const tripsEndpoint = `${this.baseEndpoint}?page=${pageIndex}&limit=${this.PAGE_SIZE}${ filter ? this.buildFilterTokens(filter) : ''}`;
    return this.httpClient.get<TripsPage>(tripsEndpoint);
  }

  getTripOfTheDay(): Observable<Trip> {
    return this.httpClient.get<Trip>(this.tripOfTheDayEndpoint);
  }

  getTripDetail(id: string): Observable<Trip> {
    const detailEndpoint = `${this.baseEndpoint}${id}`;
    return this.httpClient.get<Trip>(detailEndpoint);
  }

  private buildFilterTokens(filter: TripSearchFilter): string {
    let filterString = '';
    if (filter.field) {
      filterString += `&sortBy=${filter.field}`;
    }
    if (filter.sort) {
      filterString += `&sortOrder=${filter.sort}`;
    }
    return filterString;
  }

}
