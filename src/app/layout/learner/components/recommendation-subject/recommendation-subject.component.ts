import { Component, OnInit, Input } from '@angular/core';
import { LearnerResponse } from '../../learner-response';
import { LearnerService } from '../../learner.service';
@Component({
    selector: 'app-recommendation-subject',
    templateUrl: './recommendation-subject.component.html',
    styleUrls: ['./recommendation-subject.component.scss']
})
export class RecommendationSubjectComponent implements OnInit {
    // @Input() similarSubjects: LearnerResponse[] = [];
    // Doughnut
    similarSubjects: LearnerResponse[] = [];
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: number[] = [];
    public doughnutChartType: string;
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
        this.getSimilarSubjects();
        this.doughnutChartType = 'doughnut';
    }
    getSimilarSubjects() {
        const that = this;
        that.similarSubjects = [];
        this.learnerService.getSubjects().subscribe(
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
