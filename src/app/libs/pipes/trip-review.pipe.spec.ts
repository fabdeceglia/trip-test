import { Trip } from '../../models/trip.model';
import { TripReviewPipe } from './trip-review.pipe';

describe('TripReviewPipe', () => {
  it('create an instance', () => {
    const pipe = new TripReviewPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform the trip', () => {
    const pipe = new TripReviewPipe();

    const trip: Trip = {
      "id": "31a2f2e1-f4fc-47b7-8693-17897bbd8c0b",
      "title": "Trip to Zurich",
      "description": "A beautiful journey through the eternal city",
      "price": 3325.46,
      "rating": 1.9,
      "nrOfRatings": 369,
      "verticalType": "flight",
      "tags": [
        "nature"
      ],
      "co2": 263.4,
      "thumbnailUrl": "https://picsum.photos/id/612/200/200",
      "imageUrl": "https://picsum.photos/id/612/600/800",
      "creationDate": "2024-10-20T19:42:27.707Z"
    };

    const review = pipe.transform(trip as Trip);

    expect(review).toEqual('This trip scored a 1.9 score on a 369 reviews.');


  });


});
