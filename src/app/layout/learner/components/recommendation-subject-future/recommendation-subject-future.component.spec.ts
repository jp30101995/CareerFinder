import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSubjectFutureComponent } from './recommendation-subject-future.component';

describe('RecommendationSubjectFutureComponent', () => {
  let component: RecommendationSubjectFutureComponent;
  let fixture: ComponentFixture<RecommendationSubjectFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationSubjectFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationSubjectFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
