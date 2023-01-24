import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-by-gc-expenditure-report',
  templateUrl: './by-gc-expenditure-report.component.html',
  styleUrls: ['./by-gc-expenditure-report.component.css']
})
export class ByGcExpenditureReportComponent implements OnInit {
    Report: any;
  SearchGcType: any;
  gcDetails: any;
  showGcType='';
  getValue(val:string){
    this.showGcType = val;
  }

  constructor(

     private fb: FormBuilder,
    private ReportServices: ReportsService,
    private http: HttpClient,
    private Router: Router,
    private modalService: NgbModal,
  ) {

     this.SearchGcType = fb.group({
      gcType: [''],
    });
  }

  ngOnInit(): void {
  }

}
