import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-foreingner-expenditure-report',
  templateUrl: './foreingner-expenditure-report.component.html',
  styleUrls: ['./foreingner-expenditure-report.component.css']
})
export class ForeingnerExpenditureReportComponent implements OnInit {

 expenditure: any;
 p:number = 1;

  constructor(

      private ExpenditureFormservice: ExpenditureformService,
      private ReportService: ReportsService,
    private routes: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadExpenditure();
  }
  loadExpenditure() {
    this.ReportService.listReportExpenditure().subscribe(
      (data: any[]) => {


        this.expenditure = data.filter((s) => s.typeOfForm == 'expenditure').filter( s => s.country != 'India');
        console.log(data);
      }
    );
  }

}
