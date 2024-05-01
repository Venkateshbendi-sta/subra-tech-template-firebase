import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirseBaseDataDemoComponent } from './firse-base-data-demo.component';

describe('FirseBaseDataDemoComponent', () => {
  let component: FirseBaseDataDemoComponent;
  let fixture: ComponentFixture<FirseBaseDataDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirseBaseDataDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirseBaseDataDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
