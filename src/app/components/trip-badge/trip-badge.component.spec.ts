import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBadgeComponent } from './trip-badge.component';

describe('TripBadgeComponent', () => {
  let component: TripBadgeComponent;
  let fixture: ComponentFixture<TripBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
