import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripRowItemComponent } from './trip-row-item.component';
import { provideRouter } from '@angular/router';

describe('TripRowItemComponent', () => {
  let component: TripRowItemComponent;
  let fixture: ComponentFixture<TripRowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripRowItemComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
