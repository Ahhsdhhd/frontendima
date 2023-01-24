import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService } from 'src/app/services/reports.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-particular-gc-expenditure',
  templateUrl: './particular-gc-expenditure.component.html',
  styleUrls: ['./particular-gc-expenditure.component.css']
})
export class ParticularGcExpenditureComponent implements OnInit {
  gcNumber: any;
  Report: any;
  gcDetails: any;
    total = 0;
  value: any;
  p:number =1;

  constructor(
    private ReportService: ReportsService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private Route:ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.gcNumber = this.Route.snapshot.params['gcNumber'];
    this.listReport();
  }




  listReport() {
    this.ReportService.listReport(this.gcNumber).subscribe((data: any[]) => {
      this.Report = data.filter((s) => s.typeOfForm != 'gc').filter((s) => s.typeOfForm != 'billing');
      this.gcDetails = data.find((s) => s.typeOfForm == 'gc');

      console.log('report ' + JSON.stringify(this.Report));

      console.log('gcDetails ' + JSON.stringify(this.gcDetails));
      this.findsum(this.Report);
        console.log('findsum ' + JSON.stringify(this.Report));
      }
    );
  }
  findsum(data: any) {
    // debugger;
    this.value = data;
    console.log(this.value);
    for (let j = 0; j < data.length; j++) {
      this.total += this.value[j].ExpenditureAmount;
      console.log('total ' + this.total);
    }
  }
}
