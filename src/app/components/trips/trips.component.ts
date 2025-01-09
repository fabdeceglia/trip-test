import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnDestroy, signal, ViewChild, WritableSignal } from '@angular/core';
import { TripOfTheDayComponent } from '../trip-of-the-day/trip-of-the-day.component';
import { TripFilterComponent } from "../trip-filter/trip-filter.component";
import { TripsService } from './trips.service';
import { Trip } from '../../models/trip.model';
import { TripsPage } from '../../models/trips.page.model';
import { TripRowItemComponent } from "../trip-row-item/trip-row-item.component";
import { ScrolledDirective } from '../../libs/directives/scrolled.directive';
import { TripSearchFilter } from '../../models/trip.filter.model';

@Component({
  selector: 'trips',
  imports: [
    TripOfTheDayComponent,
    TripFilterComponent,
    TripRowItemComponent,
    ScrolledDirective
],
  providers: [],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripsComponent implements OnDestroy, AfterViewInit {

  private tripsService: TripsService = inject(TripsService);

  trips: WritableSignal<Array<Trip>> = signal([]);

  @ViewChild('searchFilter') searchFilter!: TripFilterComponent

  constructor() {
    this.trips = this.tripsService.trips;
  }

  ngAfterViewInit(): void {
    this.tripsService.fetchTrips(this.searchFilter.filter);
  }
  
  ngOnDestroy(): void {
    this.tripsService.resetSearch();
  }

  onScrolled(): void {
    this.tripsService.fetchTrips(this.searchFilter.filter);
  }

  onApplyFilter(filter: TripSearchFilter): void {
    this.tripsService.resetSearch();
    this.tripsService.fetchTrips(filter);
  }

}
