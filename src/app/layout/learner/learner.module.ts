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
// import { AgGridModule } from 'ag-grid-angular';
import { GridModule } from '../../shared/modules/grid/grid.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LearnerHistoryComponent } from './components/learner-history/learner-history.component';
import { ViewLearnerHistoryComponent } from './components/view-learner-history/view-learner-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecommendationSubjectFutureComponent } from './components/recommendation-subject-future/recommendation-subject-future.component';
import { PastResultComponent } from './components/past-result/past-result.component';
@NgModule({
    declarations: [
        SliderComponent,
        LearnerComponent,
        RecommendationSubjectComponent,
        LearnerGridComponent,
        LearnerHistoryComponent,
        ViewLearnerHistoryComponent,
        RecommendationSubjectFutureComponent,
        PastResultComponent
    ],
    imports: [
        GridModule,
        Ng2Charts,
        PageHeaderModule,
        CommonModule,
        LearnerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        Ng5SliderModule,
        NgbModule
    ]
    // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LearnerModule {}
