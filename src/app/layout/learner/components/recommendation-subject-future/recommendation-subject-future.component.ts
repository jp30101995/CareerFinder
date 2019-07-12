import { Component, OnInit } from '@angular/core';
import { LearnerService } from '../../learner.service';
import { LearnerResponse } from '../../learner-response';

@Component({
    selector: 'app-recommendation-subject-future',
    templateUrl: './recommendation-subject-future.component.html',
    styleUrls: ['./recommendation-subject-future.component.scss']
})
export class RecommendationSubjectFutureComponent implements OnInit {
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: number[] = [];
    public doughnutChartType: string;
    futureSubjects: LearnerResponse[] = [];
    isSuccess = false;
    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
    constructor(private learnerService: LearnerService) {}

    ngOnInit() {
        this.doughnutChartType = 'doughnut';
        this.getPrediction();
    }
    getPrediction() {
        const that = this;
        that.futureSubjects = [];
        that.doughnutChartLabels = [];
        that.doughnutChartData = [];
        const item = JSON.parse(localStorage.getItem('subjects'));
        // tslint:disable-next-line:forin
        for (const i in item) {
            item[i].subject = String(item[i].subject).substr(String(item[i].subject).lastIndexOf('-') + 1);
        }
        this.learnerService.getPrediction(item).subscribe(
            (data: LearnerResponse) => {
                // tslint:disable-next-line:forin
                for (const v in data) {
                    this.doughnutChartLabels.push(data[v].subject);
                    this.doughnutChartData.push(data[v].marks);
                }
                this.isSuccess = true;
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }
}
