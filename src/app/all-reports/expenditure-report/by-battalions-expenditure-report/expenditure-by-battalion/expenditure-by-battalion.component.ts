import { Component, OnInit } from '@angular/core';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-expenditure-by-battalion',
  templateUrl: './expenditure-by-battalion.component.html',
  styleUrls: ['./expenditure-by-battalion.component.css']
})
export class ExpenditureByBattalionComponent implements OnInit {


  expenditure: any;
  p: number = 1;

  name: any;
  battalion: any;
 SearchGcNumber:any;

  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route:ActivatedRoute
  ) {
    this.SearchGcNumber = fb.group({
      battalion: [''],
    });

   }

  ngOnInit(): void {
    this.battalion = this.Route.snapshot.params['battalion'];

this.loadExpenditureBYBattalion();
  }


  loadExpenditureBYBattalion(){
    this.ExpenditureFormservice.listReportByBattalion(this.battalion).subscribe(

      (data:any[])=>{
        this.expenditure = data.filter((s) => s.typeOfForm == 'expenditure');
        console.log(data);
      }
    )
  }
}

