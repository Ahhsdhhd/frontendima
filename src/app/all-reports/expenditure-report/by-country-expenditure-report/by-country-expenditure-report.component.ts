import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-by-country-expenditure-report',
  templateUrl: './by-country-expenditure-report.component.html',
  styleUrls: ['./by-country-expenditure-report.component.css']
})
export class ByCountryExpenditureReportComponent implements OnInit {
  Report: any;
  SearchCompany: any;

  showCompany='';
  getValue(val:string){
    this.showCompany = val;
  }

  constructor(

    private fb: FormBuilder,
    private ReportServices: ReportsService,
    private http: HttpClient,
    private Router: Router,
    private modalService: NgbModal,
  ) {


      this.SearchCompany = fb.group({
        company: [''],
      });

}

  ngOnInit(): void {
  }

}
