import { ChangeDetectionStrategy, Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { TripOfTheDayService } from './trip-of-the-day.service';
import { TripRowItemComponent } from "../trip-row-item/trip-row-item.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'trip-of-the-day',
  imports: [
    TripRowItemComponent,
    MatButtonModule
],
  templateUrl: './trip-of-the-day.component.html',
  styleUrl: './trip-of-the-day.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripOfTheDayComponent {
  
  tripOfTheDay: Signal<Trip | null> = signal(null);
  tripOfTheDayService: TripOfTheDayService = inject(TripOfTheDayService);

  constructor() {
    this.tripOfTheDay = this.tripOfTheDayService.tripOfTheDay;
  }

  onGetTripOfTheDay(): void {
    this.tripOfTheDayService.getTripOfTheDay();
  }

}
