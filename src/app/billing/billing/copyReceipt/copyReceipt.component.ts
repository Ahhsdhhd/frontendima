import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BillingformService } from 'src/app/services/billingform.service';
import Swal
 from 'sweetalert2';
 import { ExpenditureformService } from 'src/app/services/expenditureform.service';
@Component({
  selector: 'app-copyReceipt',
  templateUrl: './copyReceipt.component.html',
  styleUrls: ['./copyReceipt.component.css']
})
export class CopyReceiptComponent implements OnInit {

  bulkReceiptForm:any;

  constructor(

    private fb: FormBuilder,

    private ReceiptFormService: ExpenditureformService

  ){
    this.bulkReceiptForm = fb.group({
      recordNumber:[''],
      startingGcNumber: [''],
      endingGcNumber: [''],
      gcType: [''],
      date: [''],
      billNoDetails: [''],
      amount: [''],
      country:['']

    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.bulkReceiptForm.value);
    this.ReceiptFormService.addBulkReceiptForm(this.bulkReceiptForm.value).subscribe((data:any)=>{



      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'ADDED SUCCESSFULLY ! ',
        showConfirmButton: true,

      })

    })
  }
  }

