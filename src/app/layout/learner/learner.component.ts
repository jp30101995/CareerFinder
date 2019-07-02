import { Component, OnInit } from '@angular/core';
import { LearnerService } from './learner.service';
import { LearnerResponse } from './learner-response';

@Component({
    selector: 'app-learner',
    templateUrl: './learner.component.html',
    styleUrls: ['./learner.component.scss']
})
export class LearnerComponent implements OnInit {
    constructor(private learnerService: LearnerService) {}

    ngOnInit() {
        this.learnerService.getData().subscribe(
            (data: LearnerResponse) => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }
}
