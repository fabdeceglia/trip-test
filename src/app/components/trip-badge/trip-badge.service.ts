import { Injectable } from '@angular/core';
import { Trip } from '../../models/trip.model';

export enum TripBadgeEnum {
  AVERAGE = 'average',
  GOOD = 'good',
  AWESOME = 'awesome'
}

@Injectable()
export class TripBadgeService {

  private readonly HIGH_THRESHOLD = 1000;
  private readonly MEDIUM_THRESHOLD = 500;
  
  private readonly RATING__MAX_STARS = 5;
  
  private readonly LOW_IMPACT = 1;
  private readonly MEDIUM_IMPACT = 0.75;
  private readonly HIGH_IMPACT = 0.5;

  private readonly RATING_WEIGHT = 0.6;
  private readonly NR_OF_RAITINGS_WEIGHT = 0.2;
  private readonly CO2_IMPACT_WEIGHT = 0.1;


  calculateTripBadge(trip?: Trip): TripBadgeEnum {

    let badge = TripBadgeEnum.GOOD;

    if (trip) {
      const {rating, nrOfRatings, co2} = trip;

      const normalizedRating = rating / this.RATING__MAX_STARS;

      let co2Impact;
      if (co2 <= this.MEDIUM_THRESHOLD) {
        co2Impact = this.LOW_IMPACT;
      } else if (co2 <= this.HIGH_THRESHOLD) {
        co2Impact = this.MEDIUM_IMPACT;
      } else {
        co2Impact = this.HIGH_IMPACT;
      }

      const score = (normalizedRating * this.RATING_WEIGHT) + (nrOfRatings / 100 * this.NR_OF_RAITINGS_WEIGHT) + (co2Impact * this.CO2_IMPACT_WEIGHT); 

      if (score >= 0.8) {
        badge = TripBadgeEnum.AWESOME;
      } else if (score >= 0.6) {
        badge = TripBadgeEnum.GOOD;
      } else {
        badge = TripBadgeEnum.AVERAGE;
      }

    }

    return badge;  

  }

}
