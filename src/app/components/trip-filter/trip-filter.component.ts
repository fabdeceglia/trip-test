import { ChangeDetectionStrategy, Component, inject, output, signal, WritableSignal } from '@angular/core';
import { SortingFilterEnum, TripFilterEnum, TripSearchFilter } from '../../models/trip.filter.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TripFilterService } from './trip-filter.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'trip-filter',
  imports: [
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './trip-filter.component.html',
  styleUrl: './trip-filter.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripFilterComponent {

  toggleFilter: WritableSignal<boolean> = signal(false);

  filterValues = TripFilterEnum;
  sortingValues = SortingFilterEnum;

  filter: TripSearchFilter = {
    field: null,
    sort: null
  };

  tripFilterService: TripFilterService = inject(TripFilterService);

  applyFilter = output<TripSearchFilter>();

  constructor() {
    this.filter = this.tripFilterService.getFilterValue();
    this.toggleFilter.set(!this.tripFilterService.filterIsEmpty());
  }

  onToggleFilter(): void {
    this.toggleFilter.set(!this.toggleFilter());
  }

  onApplyFilter(): void {
    this.tripFilterService.setFilter(this.filter); 
    this.applyFilter.emit(this.filter);
  }

  onResetFilter(): void {
    this.tripFilterService.resetFilter();
    this.filter = this.tripFilterService.getFilterValue();
    this.applyFilter.emit(this.filter);
  }

}
