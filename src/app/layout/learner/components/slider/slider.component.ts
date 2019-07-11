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
    @Input() subjects: LearnerResponse[] = [];
    @Output() isDisplay = new EventEmitter<boolean>();
    options: Options = {
        floor: 0,
        ceil: 100,
        vertical: true
    };
    constructor(private learnerService: LearnerService) {}

    ngOnInit() {}

    checkPrediction() {
        debugger;
        this.isDisplay.emit(true);
        // const objData = this.subjects;
        // this.learnerService.getPrediction(objData).subscribe(
        //     (data: LearnerResponse) => {
        //         console.log(data);
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // );
    }
}
