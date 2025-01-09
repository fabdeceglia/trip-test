import { inject, Injectable } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs';
import { Trip } from '../../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripDetailService {

  private backendService: BackendService = inject(BackendService);

  getTripDetail(id: string): Observable<Trip> {
    return this.backendService.getTripDetail(id);
  }
}
