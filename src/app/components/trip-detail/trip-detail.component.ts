import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { TripDetailService } from './trip-detail.service';
import { Trip } from '../../models/trip.model';
import { TripsTagsPipe } from '../../libs/pipes/trips-tags.pipe';
import { TripReviewPipe } from '../../libs/pipes/trip-review.pipe';
import { MatIconModule } from '@angular/material/icon'
import { VerticalTypeIconPipe } from "../../libs/pipes/vertical-type-icon.pipe";
import { CurrencyPipe } from '@angular/common';
import { TripBadgeComponent } from '../trip-badge/trip-badge.component';

@Component({
  selector: 'trip-detail',
  imports: [
    TripsTagsPipe,
    TripReviewPipe,
    MatIconModule,
    VerticalTypeIconPipe,
    CurrencyPipe,
    TripBadgeComponent
],
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripDetailComponent implements OnInit {

  @Input() id = '';

  private tripDetailService: TripDetailService = inject(TripDetailService);

  tripDetail: WritableSignal<Trip | null> = signal(null);
  loadingTripDetail: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    if (this.id) {
      this.loadingTripDetail.set(true);
      this.tripDetailService.getTripDetail(this.id).subscribe({
        next: (trip: Trip) => this.tripDetail.set(trip),
        complete: () => this.loadingTripDetail.set(false),
        error: () => this.loadingTripDetail.set(false)
      });
    }
  }
}
