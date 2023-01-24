import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService } from 'src/app/services/reports.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css'],
})
export class ReportViewComponent implements OnInit {
  Report: any;
  gcDetails: any;
  SearchGcNumber: any;
  gcNumber:any;
  p: number = 1;
  total:any;

  constructor(
    private ReportService: ReportsService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route:ActivatedRoute
  ) {
    this.SearchGcNumber = fb.group({
      gcNumber: [''],
    });




  }

  ngOnInit(): void {
    this.gcNumber = this.Route.snapshot.params['gcNumber'];
    this.listReport();
  }




  listReport() {
    this.ReportService.listReport(this.gcNumber).subscribe((data: any[]) => {
      this.Report = data.filter((s) => s.typeOfForm != 'gc');
      this.gcDetails = data.find((s) => s.typeOfForm == 'gc');

      console.log('report ' + JSON.stringify(this.Report));

      console.log('gcDetails ' + JSON.stringify(this.gcDetails));
    });
  }

  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  closeResult = '';
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  battalion(battalionContent: any) {
    this.modalService
      .open(battalionContent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
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
