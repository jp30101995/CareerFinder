import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerGridComponent } from './learner-grid.component';

describe('LearnerGridComponent', () => {
  let component: LearnerGridComponent;
  let fixture: ComponentFixture<LearnerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
