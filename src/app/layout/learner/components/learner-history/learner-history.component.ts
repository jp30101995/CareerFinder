import { Component, OnInit, Input } from '@angular/core';
import { LearnerResponse } from '../../learner-response';
import { LearnerService } from '../../learner.service';

@Component({
    selector: 'app-learner-history',
    templateUrl: './learner-history.component.html',
    styleUrls: ['./learner-history.component.scss']
})
export class LearnerHistoryComponent implements OnInit {
    // @Input() similarLearners: LearnerResponse[] = [];
    similarLearners: LearnerResponse[] = [];
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [];
    public barChartType: string;
    public barChartLegend: boolean;
    public subjectarr = [];
    public markarr = [];
    public barChartData: any[] = [];
    isSuccess = false;
    constructor(private learnerService: LearnerService) {}

    ngOnInit() {
        this.getLearners();
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }

    getLearners() {
        const that = this;
        that.similarLearners = [];
        this.learnerService.getLearners().subscribe(
            (data: LearnerResponse) => {
                // tslint:disable-next-line:forin
                for (const v in data) {
                    if (this.barChartLabels.indexOf(data[v].LearnerID) === -1) {
                        this.barChartLabels.push(data[v].LearnerID);
                        // this.barChartData.push(data[v].Marks);
                    }
                    if (this.subjectarr.indexOf(data[v].SchoolSubjectName) === -1) {
                        this.subjectarr.push(data[v].SchoolSubjectName);
                    }
                    // that.similarLearners.push(data[v].LearnerID);
                }
                // tslint:disable-next-line:forin
                for (const sub in this.subjectarr) {
                    this.markarr = [];
                    // this.barChartData.push({ data: [], label: sub });
                    for (const v in data) {
                        if (data[v].SchoolSubjectName === this.subjectarr[sub]) {
                            this.markarr.push(data[v].Marks);
                        }
                    }
                    this.barChartData.push({ data: this.markarr, label: this.subjectarr[sub] });
                }
                console.log(data);
                this.isSuccess = true;
            },
            error => {
                console.log(error);
            }
        );
    }
    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
