import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

import { BillingformService } from 'src/app/services/billingform.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css']
})
export class ReceiptFormComponent implements OnInit {

    addBilling: any;
  constructor(

    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private routes: Router,
    private BillingFormservice: BillingformService

  ) {
     this.addBilling = fb.group(
      {


        recordNumber: ['', Validators.required],
        gcNumber: ['', Validators.required],
        gcType: ['', Validators.required],
        name: ['', Validators.required],
        battalion: ['', Validators.required],
        company: ['', Validators.required],
        date: ['', Validators.required],
        course: ['', Validators.required],

        billNoDetails: ['', Validators.required],
        type: ['', Validators.required],
        amount: ['', Validators.required]


      }
    )
  }

  ngOnInit(): void {
  }


  onSubmit() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'To Add Data',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, dont save'
    }).then((result) => {


      if (result.value) {
        this.BillingFormservice.addBillingForm
        (this.addBilling.value).subscribe((data: any) => {


         })
        Swal.fire(
          'Added',
          'Added Successfully.',
          'success'
        )

      } else  {
        Swal.fire(
          'Cancelled',
          'Data Not Submited',
          'error'
        )
      }
    })


    //console.log(this.addBilling.value);



    }
}
