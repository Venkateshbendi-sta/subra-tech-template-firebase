import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScVideoComponent } from './sc-video.component';

describe('ScVideoComponent', () => {
  let component: ScVideoComponent;
  let fixture: ComponentFixture<ScVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
