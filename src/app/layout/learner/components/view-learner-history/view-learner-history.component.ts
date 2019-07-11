import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-view-learner-history',
    templateUrl: './view-learner-history.component.html',
    styleUrls: ['./view-learner-history.component.scss']
})

export class ViewLearnerHistoryComponent {
    closeResult: string;
    constructor(private modalService: NgbModal) {}
    open(content) {
        this.modalService.open(content, {
            size: 'lg'
          }).result.then(
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
