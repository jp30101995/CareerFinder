import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-school-grid',
    templateUrl: './school-grid.component.html',
    styleUrls: ['./school-grid.component.scss']
})
export class SchoolGridComponent implements OnInit {
    gridColumnApi;
    gridApi;
    columnDefs: { headerName: string; field: string; width: number }[];
    autoGroupColumnDef;
    defaultColDef: {
        editable: boolean;
        enableRowGroup: boolean;
        enablePivot: boolean;
        enableValue: boolean;
        sortable: boolean;
        resizable: boolean;
        filter: boolean;
    };
    rowData;

    constructor(private http: HttpClient) {
        this.columnDefs = [
            {
                headerName: 'Athlete',
                field: 'athlete',
                width: 150
            },
            {
                headerName: 'Age',
                field: 'age',
                width: 90
            },
            {
                headerName: 'Country',
                field: 'country',
                width: 120
            },
            {
                headerName: 'Year',
                field: 'year',
                width: 90
            },
            {
                headerName: 'Date',
                field: 'date',
                width: 110
            },
            {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            },
            {
                headerName: 'Gold',
                field: 'gold',
                width: 100
            },
            {
                headerName: 'Silver',
                field: 'silver',
                width: 100
            },
            {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100
            },
            {
                headerName: 'Total',
                field: 'total',
                width: 100
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
    }

    ngOnInit() {}
    onGridReady(params: { api: any; columnApi: any }) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.http
            .get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
            .subscribe(data => {
                this.rowData = data;
            });
    }
}
