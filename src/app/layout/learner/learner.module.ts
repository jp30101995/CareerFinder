import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnerRoutingModule } from './learner-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { LearnerComponent } from './learner.component';
import { Ng5SliderModule } from 'ng5-slider';
import { PageHeaderModule } from '../../shared';
import { RecommendationSubjectComponent } from './components/recommendation-subject/recommendation-subject.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { LearnerGridComponent } from './components/learner-grid/learner-grid.component';
@NgModule({
    declarations: [SliderComponent, LearnerComponent, RecommendationSubjectComponent, LearnerGridComponent],
    imports: [Ng2Charts, PageHeaderModule, CommonModule, LearnerRoutingModule, FormsModule, ReactiveFormsModule, Ng5SliderModule]
})
export class LearnerModule {}
