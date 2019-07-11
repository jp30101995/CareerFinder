import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation-subject-future',
  templateUrl: './recommendation-subject-future.component.html',
  styleUrls: ['./recommendation-subject-future.component.scss']
})
export class RecommendationSubjectFutureComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Environment', 'Computer', 'English'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string;

   // events
   public chartClicked(e: any): void {
    // console.log(e);
}

public chartHovered(e: any): void {
    // console.log(e);
}

  constructor() {}

  ngOnInit() {
      this.doughnutChartType = 'doughnut';
  }

}
