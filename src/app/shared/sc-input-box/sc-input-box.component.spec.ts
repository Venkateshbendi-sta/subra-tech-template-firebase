import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScInputBoxComponent } from './sc-input-box.component';

describe('ScInputBoxComponent', () => {
  let component: ScInputBoxComponent;
  let fixture: ComponentFixture<ScInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScInputBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
