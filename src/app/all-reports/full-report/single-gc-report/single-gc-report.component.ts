import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService } from 'src/app/services/reports.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-gc-report',
  templateUrl: './single-gc-report.component.html',
  styleUrls: ['./single-gc-report.component.css']
})
export class SingleGcReportComponent implements OnInit {
  Report: any;
  expen:any;
  receipt:any;
  gcDetails: any;
  SearchGcNumber: any;
  gcNumber:any;
  p: number = 1;
  totalExpenditure:any;
  totalReceipt:any;
    valueExp:any;
    valueRecp:any;

  constructor(
    private ReportService: ReportsService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.gcNumber = this.Route.snapshot.params['gcNumber'];
    this.listReport();
  }

  listReport() {
    this.ReportService.listReport(this.gcNumber).subscribe((data: any[]) => {
      this.Report = data.filter((s) => s.typeOfForm != 'gc');
      this.receipt = data.filter((s)=>s.typeOfForm=="billing");
       this.expen = data.filter((s)=>s.typeOfForm=="expenditure");
       this.gcDetails = data.find((s) => s.typeOfForm == 'gc');

      console.log('report ' + JSON.stringify(this.Report));
      this.findsum(this.Report);
      this.findsumExp(this.Report);
      console.log('gcDetails ' + JSON.stringify(this.gcDetails));
    });
  }
  findsum(data: any) {
    // debugger;
    this.valueRecp = data;
    console.log(this.valueRecp);
    for (let j = 0; j < data.length; j++) {
      this.totalReceipt += this.valueRecp[j].amount;
      console.log("value reci " +  (this.valueRecp[j].amount))
      console.log('total recipr ' + this.totalReceipt);
    }
  }
  findsumExp(data: any) {
    // debugger;
    this.valueExp = data;
    console.log(this.valueExp);
    for (let j = 0; j < data.length; j++) {
      this.totalExpenditure += this.valueExp[j].ExpenditureAmount;
      console.log('total ecpx ' + this.totalExpenditure);
    }
  }

}
