import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

@Component({
  selector: 'app-full-report',
  templateUrl: './full-report.component.html',
  styleUrls: ['./full-report.component.css'],
})
export class FullReportComponent implements OnInit {
  expenditure: any;
  p: number = 1;
  receipt: any;
  name: any;
  gcNumber: any;
  gcType: any;
  recordNo: any;
  billNoDetails: any;
  date: any;
  amount: any;

  modecheque: any;

  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadExpenditure();
  }

  loadExpenditure() {
    this.ExpenditureFormservice.listExpenditureForm().subscribe(
      (data: any[]) => {
        this.expenditure = data.filter((s) => s.typeOfForm == 'expenditure');
        console.log(data);
        this.receipt = data.filter((s) => s.typeOfForm == 'billing');
      }
    );
  }
  onClickTable(gcNumber: any) {
    this.routes.navigate(['/singleReport/' + gcNumber]);
  }
}
