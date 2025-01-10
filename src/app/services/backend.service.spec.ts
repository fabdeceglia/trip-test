import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { BackendService } from './backend.service';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

describe('BackendService', () => {
  let service: BackendService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BackendService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(BackendService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch trip of the day', async () => {
    
    const mockedTripOfTheDay = {
      "id": "ab627531-43d5-445b-b644-14f85b6a60f7",
      "title": "Trip to Las Vegas",
      "description": "A beautiful journey through the city of lights",
      "price": 4929.66,
      "rating": 2.5,
      "nrOfRatings": 665,
      "verticalType": "train",
      "tags": [
        "culture"
      ],
      "co2": 240.3,
      "thumbnailUrl": "https://picsum.photos/id/888/200/200",
      "imageUrl": "https://picsum.photos/id/888/600/800",
      "creationDate": "2024-10-20T19:42:30.013Z"
    };
    
    const tripOfTheDay$ = service.getTripOfTheDay();
    const tripOfTheDayPromise = firstValueFrom(tripOfTheDay$);
    
    const req = httpTesting.expectOne('https://iy3ipnv3uc.execute-api.eu-west-1.amazonaws.com/Prod/v1/trips/random/trip-of-the-day', 'Request to load the configuration');

    expect(req.request.method).toBe('GET');
    req.flush(mockedTripOfTheDay);
    expect(await tripOfTheDayPromise).toEqual(mockedTripOfTheDay);
    httpTesting.verify();
  });
});
