import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-emp-data',
  templateUrl: './create-emp-data.component.html',
  styleUrls: ['./create-emp-data.component.scss']
})
export class CreateEmpDataComponent implements OnInit {
  formDetails: FormGroup;
  isEditItem;
  constructor(public dialogRef: MatDialogRef<CreateEmpDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    console.log(this.data)

    this.formDetails = this.fb.group({
      
      name: ["", Validators.required],
      salary: ["", Validators.required],
      age: ["", Validators.required],
     
    });

    

    if(this.data){
      //  this.formDetails.setValue(this.data);   
       this.formDetails.controls['name'].setValue(this.data.employee_name);
       this.formDetails.controls['salary'].setValue(this.data.employee_salary);
       this.formDetails.controls['age'].setValue(this.data.employee_age);
       
      //  this.formDetails.controls.name.setValue('abc');
       
    } else{
       this.formDetails.reset();
    }
  }

  onSubmit(form){

    if(this.data){
      form.value['id'] = this.data.id
      this.dialogRef.close(form.value)
    } else{
      this.dialogRef.close(form.value)
    }
    
    
  }

  

}
