import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService } from 'src/app/services/reports.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-expenditure-by-status-table',
  templateUrl: './expenditure-by-status-table.component.html',
  styleUrls: ['./expenditure-by-status-table.component.css']
})
export class ExpenditureByStatusTableComponent implements OnInit {

  gcNumberFind:any;
  status:any;
  Report:any;
  expenditure:any;
  p:number = 1;
gcNumber:any;
  constructor(
    private ReportService:ReportsService,
    private Route:ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
    this.status = this.Route.snapshot.params['status'];
    this.listReport();
  }




  listReport() {
    this.ReportService.listReportBySatus(this.status).subscribe((data: any[]) => {
      this.Report = data.filter((s) => s.typeOfForm == 'gc');
      console.log(this.Report.values.gcNumber);

    // this.expenditure = data.find((s) => s.typeOfForm == 'expenditure');
    //  console.log("report " + JSON.stringify(this.Report));
    //  console.log ("expenditure " + JSON.stringify(this.expenditure));
      }
    );
  }

}
