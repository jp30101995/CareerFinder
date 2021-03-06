import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-past-result',
    templateUrl: './past-result.component.html',
    styleUrls: ['./past-result.component.scss']
})
export class PastResultComponent implements OnInit {
    closeResult: string;
    constructor(private modalService: NgbModal) {}
    ngOnInit() {}
    open(content) {
        const yearId = localStorage.getItem('yearId');
        debugger;
        this.modalService
            .open(content, {
                size: 'lg'
            })
            .result.then(
                result => {
                    this.closeResult = `Closed with: ${result}`;
                },
                reason => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                }
            );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
