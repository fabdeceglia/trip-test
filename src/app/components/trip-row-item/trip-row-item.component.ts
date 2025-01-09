import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { VerticalTypeIconPipe } from '../../libs/pipes/vertical-type-icon.pipe';
import { RouterLink } from '@angular/router';
import { TripBadgeComponent } from '../trip-badge/trip-badge.component';

@Component({
  selector: 'trip-row-item',
  imports: [
    DatePipe,
    CurrencyPipe,
    MatIconModule,
    VerticalTypeIconPipe,
    RouterLink,
    TripBadgeComponent
  ],
  templateUrl: './trip-row-item.component.html',
  styleUrl: './trip-row-item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripRowItemComponent {

  trip = input<Trip | null>();
  isTripOfTheDay = input<boolean>();

}
