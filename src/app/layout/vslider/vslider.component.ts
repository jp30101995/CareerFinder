import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-vslider',
  templateUrl: './vslider.component.html',
  styleUrls: ['./vslider.component.scss']
})
export class VsliderComponent implements OnInit {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 100,
    vertical: true
  };
  constructor() { }

  ngOnInit() {
  }

}
