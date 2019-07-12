import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';
import { LearnerResponse } from '../../learner-response';
import { FormControl } from '@angular/forms';
import { LearnerService } from '../../learner.service';
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    subjects: LearnerResponse[] = [];
    @Output() isDisplay = new EventEmitter<boolean>();
    @Output() objData = new EventEmitter<boolean>();

    options: Options = {
        floor: 0,
        ceil: 100,
        vertical: true
    };
    constructor(private learnerService: LearnerService) {}
    isSuccess = false;
    ngOnInit() {
        this.getSubjects();
    }

    checkPrediction() {
        this.isDisplay.emit(true);
        this.sendObjData();
    }

    sendObjData() {
        localStorage.setItem('subjects', JSON.stringify(this.subjects));
    }
    getSubjects() {
        const that = this;
        that.subjects = [];
        this.learnerService.getSubjects().subscribe(
            (data: LearnerResponse) => {
                // tslint:disable-next-line:forin
                for (const v in data) {
                    this.subjects.push(data[v]);
                }
                console.log(data);
                this.isSuccess = true;
            },
            error => {
                console.log(error);
            }
        );
    }
}
