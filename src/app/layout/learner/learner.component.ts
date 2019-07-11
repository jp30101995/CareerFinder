import { Component, OnInit, Output } from '@angular/core';
import { LearnerService } from './learner.service';
import { LearnerResponse } from './learner-response';
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
    yearId: string;
    ngOnInit() {}
    enabledDisabledControl($evnt: boolean) {
        this.display = $evnt;
    }
    onChange(objValue) {
        this.yearId = objValue;
        localStorage.setItem('yearId', objValue);
    }
}
