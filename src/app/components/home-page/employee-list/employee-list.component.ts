import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'birthDate', 'mobile', 'city', 'action'];
  dataSource;


  constructor(public dialog: MatDialog, public commonService: CommonService) { }

  ngOnInit(): void {
    this.dataSource = this.commonService.employeeDataList
  }

  createEmpData() {
    const createEmpdialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '40%',       
    });

    createEmpdialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
       
    });
  }

  editEmpList(element:Employee){
    
    const editEmployeeListDialogRef = this.dialog.open(AddEmployeeComponent,{
      width: '40%', 
      data: element
    })
    editEmployeeListDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
       
    });
  }

  deleteEmployee(){
    const deleteEmpDailogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '30%', 
      position : {'top': '3%'},
        
      // data: {name: this.name, animal: this.animal}
    });

    deleteEmpDailogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
       
    });
  }

}
