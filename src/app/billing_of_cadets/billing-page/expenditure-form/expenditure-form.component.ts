import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expenditure-form',
  templateUrl: './expenditure-form.component.html',
  styleUrls: ['./expenditure-form.component.css']
})
export class ExpenditureFormComponent implements OnInit {



  addExpenditureForm:any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb:FormBuilder,
    private routes:Router,
    private ExpenditureFormservice:ExpenditureformService

  ) {
    this.addExpenditureForm = fb.group(
      {

           recordNumber: ['',Validators.required],
           gcNumber: ['',Validators.required],
           gcType :['',Validators.required],
           name :['',Validators.required],
           battalion: ['',Validators.required],
           company: ['',Validators.required],
           date: ['',Validators.required],
           billNoDetails: ['',Validators.required],
           ExpenditureAmount: ['',Validators.required]


        }
     )



  }

  ngOnInit(): void {
  }

  onSubmit(){

    Swal.fire({
      title: 'Are you sure?',
      text: 'To Add Data',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, dont save'
    }).then((result) => {


      if (result.value) {
        this.ExpenditureFormservice.addExpenditureForm
      (this.addExpenditureForm.value)
      .subscribe((data:any)=>{

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


    // this.ExpenditureFormservice.addExpenditureForm(this.addExpenditureForm.value).subscribe((data:any)=>{

    // })
      }
dataSubmit(){

}

    }
