import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-expenditure',
  templateUrl: './delete-expenditure.component.html',
  styleUrls: ['./delete-expenditure.component.css'],
})
export class DeleteExpenditureComponent implements OnInit {
  expenditureDeleteForm: any;
  apiUrl = 'http://localhost:3000/expenditureForm//bulkDelete';
  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private bulkDeleteExpenditureService: ExpenditureformService,
    private http: HttpClient
  ) {
    this.expenditureDeleteForm = fb.group({
      startingGcNumber: ['', Validators.required],
      endingGcNumber: ['', Validators.required],
      deleteBillNoDetails: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    var body = {
      startingGcNumber: this.expenditureDeleteForm.value.startingGcNumber,
      endingGcNumber: this.expenditureDeleteForm.value.endingGcNumber,
      deleteBillNoDetails: this.expenditureDeleteForm.value.deleteBillNoDetails,
    };

    this.http.delete<any>(this.apiUrl, { body }).subscribe((data) => {
      // `${environment.baseUrl}
    });
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'DELETED SUCCESSFULLY ! ',
      showConfirmButton: true,
    });

    // console.log(this.expenditureDeleteForm.value);
  }
}
