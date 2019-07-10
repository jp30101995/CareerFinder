import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { SchoolGridComponent } from './school-grid/school-grid.component';
import { GridModule } from '../../shared/modules/grid/grid.module';

@NgModule({
    declarations: [SchoolComponent, SchoolGridComponent],
    imports: [CommonModule, SchoolRoutingModule, GridModule]
})
export class SchoolModule {}
