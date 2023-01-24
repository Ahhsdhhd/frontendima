import { Component, OnInit } from '@angular/core';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-expenditure-gcnumber-table',
  templateUrl: './expenditure-gcnumber-table.component.html',
  styleUrls: ['./expenditure-gcnumber-table.component.css']
})
export class ExpenditureGcnumberTableComponent implements OnInit {

  expenditure: any;
  p: number = 1;


  name: any;
  gcNumber: any;
 SearchGcNumber:any;

  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route:ActivatedRoute
  ) {
    this.SearchGcNumber = fb.group({
      gcNumber: [''],
    });

   }

  ngOnInit(): void {
    this.gcNumber = this.Route.snapshot.params['gcNumber'];

this.loadExpenditureBYGcNumber();
  }


  loadExpenditureBYGcNumber(){

    this.ExpenditureFormservice.listReportByGcNumber(this.gcNumber).subscribe(

      (data:any[])=>{
        this.expenditure = data.filter((s) => s.typeOfForm == 'expenditure');
        console.log(data);
      }
    )
  }
  onClickTable(gcNumber: any) {
    this.routes.navigate(['/singleExpenditure/' + gcNumber]);
  }



}
