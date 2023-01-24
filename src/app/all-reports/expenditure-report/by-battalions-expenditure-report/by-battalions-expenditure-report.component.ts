import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-by-battalions-expenditure-report',
  templateUrl: './by-battalions-expenditure-report.component.html',
  styleUrls: ['./by-battalions-expenditure-report.component.css']
})
export class ByBattalionsExpenditureReportComponent implements OnInit {

  Billing: any;
  p:number=1;


  SearchBattalion: any;

  showBattalion='';
  getValue(val:string){
    this.showBattalion = val;
  }

  constructor(
    private fb: FormBuilder,
    private ReportServices: ReportsService,
    private http: HttpClient,
    private Router: Router,
    private modalService: NgbModal,
  ) {

    this.SearchBattalion = fb.group({
      battalion: [''],
    });
   }

  ngOnInit(): void {
  }

}
