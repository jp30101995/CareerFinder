import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerHistoryComponent } from './learner-history.component';

describe('LearnerHistoryComponent', () => {
  let component: LearnerHistoryComponent;
  let fixture: ComponentFixture<LearnerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
