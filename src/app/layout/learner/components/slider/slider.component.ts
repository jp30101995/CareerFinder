import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
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
