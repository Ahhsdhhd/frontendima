import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';
import { ReportsService } from 'src/app/services/reports.service';
@Component({
  selector: 'app-all-expenditure',
  templateUrl: './all-expenditure.component.html',
  styleUrls: ['./all-expenditure.component.css'],
})
export class AllExpenditureComponent implements OnInit {
  ExpenditureAmount: any = [];
  expenditure: any;
  p: number = 1;
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;
  tableSizes: any = [3, 6, 9, 12];
  Date1: Date = new Date();
  total = 0;
  value: any;
  name: any;
  gcNumber: any;
  gcType: any;
  recordNo: any;
  billNoDetails: any;
  date: any;
  amount: any;

  modecheque: any;
  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal,
    private ReportService:ReportsService
  ) {}

  ngOnInit(): void {
    this.loadExpenditure();
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  loadExpenditure(){

    this.ReportService.listReportExpenditure().subscribe(
          (data: any[]) => {
            this.expenditure = data.filter((s) => s.typeOfForm != 'gc')
            .filter((s) => s.typeOfForm != 'billing')
            .filter((s) => s.typeOfForm == 'expenditure');
            console.log(data);
           console.log("expenditure " + JSON.stringify(this.expenditure));
            this.findsum(this.expenditure);
            console.log('findsum ' + JSON.stringify(this.expenditure));
          }
        );
      }
  findsum(data: any) {
  //  debugger;
    this.value = data;
    console.log( "value " + this.value);
    for (let j = 0; j < data.length; j++) {
      this.total += this.value[j].ExpenditureAmount;
      console.log('total ' + this.total);
    }
  }
}
