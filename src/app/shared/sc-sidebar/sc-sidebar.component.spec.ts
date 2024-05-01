import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSidebarComponent } from './sc-sidebar.component';

describe('ScSidebarComponent', () => {
  let component: ScSidebarComponent;
  let fixture: ComponentFixture<ScSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
