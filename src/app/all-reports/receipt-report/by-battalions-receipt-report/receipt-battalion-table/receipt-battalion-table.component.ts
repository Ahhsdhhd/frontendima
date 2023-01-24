import { Component, OnInit } from '@angular/core';

import { ExpenditureformService } from 'src/app/services/expenditureform.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-receipt-battalion-table',
  templateUrl: './receipt-battalion-table.component.html',
  styleUrls: ['./receipt-battalion-table.component.css']
})
export class ReceiptBattalionTableComponent implements OnInit {

  Billing: any;
  p: number = 1;

  name: any;
  battalion: any;
 SearchBattalion:any;

  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route:ActivatedRoute
  ) {
    this.SearchBattalion = fb.group({
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
        this.Billing = data.filter((s) => s.typeOfForm == 'receipt');
        console.log(data);
      }
    )
  }
}
