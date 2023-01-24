import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-by-status-expenditure-report',
  templateUrl: './by-status-expenditure-report.component.html',
  styleUrls: ['./by-status-expenditure-report.component.css']
})
export class ByStatusExpenditureReportComponent implements OnInit {

  Billing: any;
  p:number=1;


  SearchStatus: any;

  showStatus='';
  getValue(val:string){
    this.showStatus = val;
  }
  constructor(
    private fb: FormBuilder,
    private ReportServices: ReportsService,
    private http: HttpClient,
    private Router: Router,
    private modalService: NgbModal,
  ) {
    this.SearchStatus = fb.group({
      status: [''],
    });
  }

  ngOnInit(): void {
  }

}
