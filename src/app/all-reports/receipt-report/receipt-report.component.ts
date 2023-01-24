import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-receipt-report',
  templateUrl: './receipt-report.component.html',
  styleUrls: ['./receipt-report.component.css']
})
export class ReceiptReportComponent implements OnInit {


  Report: any;
  SearchGcNumber: any;
  gcDetails: any;
  showGcNumber='';
  getValue(val:string){
    this.showGcNumber = val;
  }

  constructor(
    private fb: FormBuilder,
    private ReportServices: ReportsService,
    private http: HttpClient,
    private Router: Router,
    private modalService: NgbModal,
  ) {
    this.SearchGcNumber = fb.group({
      gcNumber: [''],
    });
  }

  ngOnInit(): void {
    // this.listReport();
  }

  //   listReport() {

  //     console.log("GC " + this.SearchGcNumber.value.gcNumber);
  //     this.ReportServices.listReport(this.SearchGcNumber.value.gcNumber).subscribe((data: any[]) => {
  //       this.Report = data.filter((s) => s.typeOfForm != 'gc');
  //       this.gcDetails = data.find((s) => s.typeOfForm == 'gc');

  //       console.log('report ' + JSON.stringify(this.Report));
  //       console.log('gcDetails ' + JSON.stringify(this.gcDetails));
  //     });


  // }






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
        (result: any) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
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

