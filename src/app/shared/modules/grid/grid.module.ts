import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule, AgGridAngular } from 'ag-grid-angular';
@NgModule({
    declarations: [],
    imports: [CommonModule, AgGridModule.withComponents([])],
    exports: [AgGridAngular]
})
export class GridModule {}
