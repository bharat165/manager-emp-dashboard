import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    let nameString = 'Bharat Jadhav'

    const fullName = nameString.split(' ');
const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);

console.log(initials.toUpperCase())
// return initials.toUpperCase();
  }

}
