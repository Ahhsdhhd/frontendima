import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReportsService } from 'src/app/services/reports.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-by-battalions-receipt-report',
  templateUrl: './by-battalions-receipt-report.component.html',
  styleUrls: ['./by-battalions-receipt-report.component.css']
})
export class ByBattalionsReceiptReportComponent implements OnInit {


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
