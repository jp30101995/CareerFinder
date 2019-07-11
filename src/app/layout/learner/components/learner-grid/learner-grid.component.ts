import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LearnerResponse } from '../../learner-response';
import { LearnerService } from '../../learner.service';
@Component({
    selector: 'app-learner-grid',
    templateUrl: './learner-grid.component.html',
    styleUrls: ['./learner-grid.component.scss']
})
export class LearnerGridComponent implements OnInit {
    gridApi: any;
    gridColumnApi: any;
    paginationPageSize: number;
    paginationNumberFormatter: (params: any) => string;
    columnDefs: (
        | {
              headerName: string;
              field: string;
              width: number;
              checkboxSelection: (params: any) => boolean;
              headerCheckboxSelection: (params: any) => boolean;
          }
        | { headerName: string; field: string; width: number; checkboxSelection?: undefined; headerCheckboxSelection?: undefined })[];
    autoGroupColumnDef: {
        headerName: string;
        width: number;
        field: string;
        valueGetter: (params: any) => any;
        headerCheckboxSelection: boolean;
        cellRenderer: string;
        cellRendererParams: { checkbox: boolean };
    };
    defaultColDef: {
        editable: boolean;
        enableRowGroup: boolean;
        enablePivot: boolean;
        enableValue: boolean;
        sortable: boolean;
        resizable: boolean;
        filter: boolean;
    };
    rowSelection: string;
    rowGroupPanelShow: string;
    pivotPanelShow: string;
    rowData: {};

    constructor(private http: HttpClient, private learnerService: LearnerService) {
        this.columnDefs = [
            {
                headerName: 'Learner ID',
                field: 'LearnerID',
                width: 120
            },
            {
                headerName: 'Subject',
                field: 'SchoolSubjectName',
                width: 250
            },
            {
                headerName: 'Marks',
                field: 'Marks',
                width: 250
            }
        ];

        this.defaultColDef = {
            editable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
            filter: true
        };
        this.rowSelection = 'multiple';
        this.rowGroupPanelShow = 'always';
        this.pivotPanelShow = 'always';
        this.paginationPageSize = 10;
        this.paginationNumberFormatter = function(params) {
            return '[' + params.value.toLocaleString() + ']';
        };
    }

    ngOnInit() {}
    onPageSizeChanged(newPageSize) {
        this.gridApi.paginationSetPageSize(Number(newPageSize));
    }
    onGridReady(params: { api: any; columnApi: any }) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        // this.http
        //     .get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
        //     .subscribe(data => {
        //         this.rowData = data;
        //     });
        this.learnerService.getLearners().subscribe(
            (data: LearnerResponse) => {
                // tslint:disable-next-line:forin
                this.rowData = data;
                console.log(data);
                // this.isSuccess = true;
            },
            error => {
                console.log(error);
            }
        );
    }
}
