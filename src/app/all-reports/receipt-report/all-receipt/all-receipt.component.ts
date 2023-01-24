import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BillingformService } from 'src/app/services/billingform.service';

import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-all-receipt',
  templateUrl: './all-receipt.component.html',
  styleUrls: ['./all-receipt.component.css']
})
export class AllReceiptComponent implements OnInit {
amount:any = [];
  Billing: any;

  gcNumber: any;
  gcType: any;
  recordNo: any;
  billNoDetails: any;
  date: any;

  name: any;
  searchText: any;
  p: number = 1;


  modecheque: any;

  total = 0;
  value: any;


  constructor(
    private BillingFormservice: BillingformService,
    private routes: Router,
    private modalService: NgbModal,
    private ReportService:ReportsService
  ) {}

  ngOnInit(): void {
    this.loadBilling();
  }

  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  closeResult = '';
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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



  loadBilling() {
    this.ReportService.listReportExpenditure().subscribe
    ((data: any[]) => {

      this.Billing = data.filter((s) => s.typeOfForm != 'gc')
      .filter((s) => s.typeOfForm != 'expenditure')
      .filter((s) => s.typeOfForm == 'billing');




      console.log(JSON.stringify(this.Billing));
       this.findsum(this.Billing);

    });
  }
  findsum(data: any) {
    //  debugger;
      this.value = data;


      for (let j = 0; j < data.length; j++) {
        this.total += this.value[j].amount;

        console.log('total ' + this.total);
      }
    }
  }
