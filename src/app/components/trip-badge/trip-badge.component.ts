import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, WritableSignal } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { TripBadgeEnum, TripBadgeService } from './trip-badge.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'trip-badge',
  imports: [
    MatTooltipModule
  ],
  templateUrl: './trip-badge.component.html',
  styleUrl: './trip-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TripBadgeService]
})
export class TripBadgeComponent implements OnInit {

  trip = input<Trip>();

  tripBadge: WritableSignal<TripBadgeEnum> = signal(TripBadgeEnum.GOOD);
  tripBadgeService: TripBadgeService = inject(TripBadgeService);

  ngOnInit(): void {
    this.tripBadge.set(this.tripBadgeService.calculateTripBadge(this.trip()));
  }

}
