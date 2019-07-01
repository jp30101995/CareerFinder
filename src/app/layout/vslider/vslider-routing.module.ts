import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VsliderComponent } from './vslider.component';

const routes: Routes = [ {
  path: '',
  component: VsliderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VsliderRoutingModule { }
