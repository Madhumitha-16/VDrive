import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingUserComponent } from './pricing-user.component';

describe('PricingUserComponent', () => {
  let component: PricingUserComponent;
  let fixture: ComponentFixture<PricingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
