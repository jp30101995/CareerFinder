import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { SchoolGridComponent } from './school-grid/school-grid.component';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [SchoolComponent, SchoolGridComponent, AgGridAngular],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
