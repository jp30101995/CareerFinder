import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-history',
  templateUrl: './learner-history.component.html',
  styleUrls: ['./learner-history.component.scss']
})
export class LearnerHistoryComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
};
public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012'
];
public barChartType: string;
public barChartLegend: boolean;

public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'English' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Maths' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Science' }
];
  constructor() { }

  ngOnInit() {
    this.barChartType = 'bar';
    this.barChartLegend = true;
  }
  // events
  public chartClicked(e: any): void {
    // console.log(e);
}

public chartHovered(e: any): void {
    // console.log(e);
}
}
