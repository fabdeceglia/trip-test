import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../../models/trip.model';

@Pipe({
  name: 'tripReview',
  pure: true,
  standalone: true
})
export class TripReviewPipe implements PipeTransform {

  transform(trip: Trip | null): string {
    let review = '';
    if (trip) {
      review = `This trip scored a ${trip.rating} score on a ${trip.nrOfRatings} reviews.`;
    }
    return review;
  }

}
