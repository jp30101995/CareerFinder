import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSubjectComponent } from './recommendation-subject.component';

describe('RecommendationSubjectComponent', () => {
  let component: RecommendationSubjectComponent;
  let fixture: ComponentFixture<RecommendationSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
