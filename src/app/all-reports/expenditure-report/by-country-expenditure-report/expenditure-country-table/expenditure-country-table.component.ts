import { Component, OnInit } from '@angular/core';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expenditure-country-table',
  templateUrl: './expenditure-country-table.component.html',
  styleUrls: ['./expenditure-country-table.component.css'],
})
export class ExpenditureCountryTableComponent implements OnInit {
  ExpenditureAmount: any = [];

  expenditure: any;
  p: number = 1;
  // total: any;
  value: any;
  name: any;
  company: any;
  SearchCompany: any;
  total=0;
  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route: ActivatedRoute
  ) {
    this.SearchCompany = fb.group({
      country: [''],
    });
  }



  ngOnInit(): void {
    this.company = this.Route.snapshot.params['company'];

    this.loadExpenditureByCompany();
  }

  loadExpenditureByCompany() {
    this.ExpenditureFormservice.listReportByCompany(this.company).subscribe(
      (data: any[]) => {
        this.expenditure = data.filter((s) => s.typeOfForm != 'gc').filter((s) => s.typeOfForm == 'expenditure');
        console.log(data);
        this.expenditure = data.filter((s) => s.typeOfForm != 'gc').filter((s) => s.typeOfForm == 'expenditure');
        this.findsum(this.expenditure);
        console.log("findsum "+ this.expenditure);
      }
    );
  }

  findsum(data: any) {
    // debugger;
    this.value = data;
    console.log(this.value);
    for (let j = 0; j < data.length; j++) {
      this.total += this.value[j].ExpenditureAmount;
      console.log("total " + this.total);

    }
  }

  onClickTable(gcNumber: any) {
    this.routes.navigate(['/singleExpenditure/' + gcNumber]);
  }
}
