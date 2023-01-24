import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-bank-report',
  templateUrl: './bank-report.component.html',
  styleUrls: ['./bank-report.component.css']
})
export class BankReportComponent implements OnInit {

  expenditure:any;
  billing:any
ExpenditureAmount:any =[];
amount:any;


totalExpenditure=0;
totalReceipt=0;
totalBalance=1;

receiptValue:any;
expenditureValue:any;
totalValue:any;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    constructor(
      private breakpointObserver: BreakpointObserver,
      private ReportService:ReportsService
      ) {}

  ngOnInit(): void {
    this.loadExpenditure();
    this.loadReceipt();

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
    this.expenditureValue = data;
    console.log( "value " + this.expenditureValue);
    for (let j = 0; j < data.length; j++) {
      this.totalExpenditure += this.expenditureValue[j].ExpenditureAmount;
      console.log('total ' + this.totalExpenditure);
    }
  }


  loadReceipt(){

    this.ReportService.listReportExpenditure().subscribe(
          (data: any[]) => {
            this.expenditure = data.filter((s) => s.typeOfForm != 'gc')
            .filter((s) => s.typeOfForm == 'billing')
            .filter((s) => s.typeOfForm != 'expenditure');

            this.findReceiptsum(this.expenditure);

          }
        );
      }
  findReceiptsum(data: any) {
  //  debugger;
    this.receiptValue = data;
    console.log( "value " + this.receiptValue);
    for (let j = 0; j < data.length; j++) {
      this.totalReceipt += this.receiptValue[j].amount;
      console.log('total ' + this.totalReceipt);
    }
  }
}
