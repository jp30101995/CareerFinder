import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { LearnerService } from './learner.service';
import { LearnerResponse } from './learner-response';
import { RecommendationSubjectFutureComponent } from './components/recommendation-subject-future/recommendation-subject-future.component';
@Component({
    selector: 'app-learner',
    templateUrl: './learner.component.html',
    styleUrls: ['./learner.component.scss']
})
export class LearnerComponent implements OnInit {
    subjects: LearnerResponse[] = [];
    similarSubjects: LearnerResponse[] = [];
    constructor(private learnerService: LearnerService) {}
    display = false;
    @ViewChild(RecommendationSubjectFutureComponent, { static: false }) futureComponent: RecommendationSubjectFutureComponent;
    ngOnInit() {}
    enabledDisabledControl($evnt: boolean) {
        debugger;
        this.display = $evnt;
        this.futureComponent.getPrediction();
    }
    // onChange(objValue) {
    //     localStorage.setItem('yearId', objValue);
    // }
}
