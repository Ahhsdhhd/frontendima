import { Component, OnInit } from '@angular/core';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expenditure-prefix-table',
  templateUrl: './expenditure-prefix-table.component.html',
  styleUrls: ['./expenditure-prefix-table.component.css']
})
export class ExpenditurePrefixTableComponent implements OnInit {

  expenditure: any;
  p: number = 1;
 gcType:any;
  name: any;
  country: any;
 SearchGcType:any;
  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route:ActivatedRoute
  ) {
    this.SearchGcType = fb.group({
      gcType: [''],
    });
  }

  ngOnInit(): void {

    this.gcType = this.Route.snapshot.params['gcType'];
    this.loadExpenditureBYPrefix();
  }


  loadExpenditureBYPrefix(){

    this.ExpenditureFormservice.listReportByPrefix(this.gcType).subscribe(

      (data:any[])=>{
        this.expenditure = data.filter((s) => s.typeOfForm == 'expenditure');
        console.log(data);
      }
    )
  }
}
