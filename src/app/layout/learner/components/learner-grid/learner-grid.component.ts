import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    // rowData = [
    //     { make: 'Toyota', model: 'Celica', price: 35000 },
    //     { make: 'Ford', model: 'Mondeo', price: 32000 },
    //     { make: 'Porsche', model: 'Boxter', price: 72000 }
    // ];

    // columnDefs = [
    //     { headerName: 'Make', field: 'make', width: 200, sortable: true, filter: true },
    //     { headerName: 'Model', field: 'model', width: 400, sortable: true, filter: true },
    //     { headerName: 'Price', field: 'price', width: 450, sortable: true, filter: true }
    // ];

    // defaultColDef = {
    //     editable: true,
    //     enableRowGroup: true,
    //     enablePivot: true,
    //     enableValue: true,
    //     sortable: true,
    //     resizable: true,
    //     filter: true
    // };
    // rowSelection = 'single';
    // rowGroupPanelShow = 'always';
    // pivotPanelShow = 'always';
    constructor(private http: HttpClient) {
        this.columnDefs = [
            {
                headerName: 'Athlete',
                field: 'athlete',
                width: 150,
                checkboxSelection: function(params) {
                    return params.columnApi.getRowGroupColumns().length === 0;
                },
                headerCheckboxSelection: function(params) {
                    return params.columnApi.getRowGroupColumns().length === 0;
                }
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
        this.autoGroupColumnDef = {
            headerName: 'Group',
            width: 200,
            field: 'athlete',
            valueGetter: function(params: {
                node: { group: any; key: any };
                data: { [x: string]: any };
                colDef: { field: string | number };
            }) {
                if (params.node.group) {
                    return params.node.key;
                } else {
                    return params.data[params.colDef.field];
                }
            },
            headerCheckboxSelection: true,
            cellRenderer: 'agGroupCellRenderer',
            cellRendererParams: { checkbox: true }
        };
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

        this.http
            .get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json')
            .subscribe(data => {
                this.rowData = data;
            });
    }
}
