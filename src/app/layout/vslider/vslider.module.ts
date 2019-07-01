import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VsliderRoutingModule } from './vslider-routing.module';
import { VsliderComponent } from './vslider.component';

import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
    declarations: [VsliderComponent],
    imports: [CommonModule, VsliderRoutingModule,  FormsModule, Ng5SliderModule]
})
export class VsliderModule {}
