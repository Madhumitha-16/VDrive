import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPricingComponent } from './driver-pricing.component';

describe('DriverPricingComponent', () => {
  let component: DriverPricingComponent;
  let fixture: ComponentFixture<DriverPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
