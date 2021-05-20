import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Employee} from '../employee-list/employee';
import * as moment from 'moment';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  formDetails: FormGroup;
  isEditItem;
  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    

    console.log(this.data)

    this.formDetails = this.fb.group({

      firstName : ["", Validators.required],
        lastName : ["", Validators.required],
        address: ["", Validators.required],
        birthDate: ["", Validators.required],
        mobile:["", Validators.required],
        city: ["", Validators.required],
       

     
    });

    

    if(this.data){
        this.formDetails.setValue(this.data);
        this.formDetails.controls['birthDate'].setValue(new Date(this.data.birthDate));
    } else{
       this.formDetails.reset();
    }
  }

  onSubmit(form){
    form.value.birthDate = moment(form.value.birthDate).format('MM/DD/YYYY');

    if(this.data){
      form.value['id'] = this.data.id
      this.dialogRef.close(form.value)
    } else{
      this.dialogRef.close(form.value)
    }
    
    
  }

}
