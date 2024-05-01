import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLandingDashboardComponent } from './user-landing-dashboard.component';

describe('UserLandingDashboardComponent', () => {
  let component: UserLandingDashboardComponent;
  let fixture: ComponentFixture<UserLandingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLandingDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLandingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
