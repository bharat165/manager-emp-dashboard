import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {
  title = ''
  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
   
    this.title = this.data.firstName + ' ' +this.data.lastName;
     
  }

  deleteRecord(){
    this.dialogRef.close(this.data);
  }

}
