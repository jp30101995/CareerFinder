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
    similarLearners: LearnerResponse[] = [];
    constructor(private learnerService: LearnerService) {}
    display = false;
    ngOnInit() {
        // this.getSubjects();
    }

    enabledDisabledControl($evnt: boolean) {
        this.display = $evnt;
    }

    getSubjects() {
        const that = this;
        that.similarLearners = [];
        this.learnerService.getLearners().subscribe(
            (data: LearnerResponse) => {
                // tslint:disable-next-line:forin
                for (const v in data) {
                    that.similarLearners.push(data[v]);
                }
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }
}
