import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { CommonService } from 'src/app/service/common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'birthDate', 'mobile', 'city', 'action'];
  dataSource$;


  constructor(public dialog: MatDialog, public commonService: CommonService,
    public commonServie:CommonService ) { }

  ngOnInit(): void {
    this.dataSource$ = this.commonService.employeeDataList$;
  }

  createEmpData() {
    const createEmpdialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '40%',       
    });

    createEmpdialogRef.afterClosed().subscribe(result => {
      if(result){
        this.commonServie.saveEmployee(result);
        this.dataSource$ = this.commonServie.getEmployeeList();
      }
      
    });
  }

  editEmpList(element:Employee){
    
    const editEmployeeListDialogRef = this.dialog.open(AddEmployeeComponent,{
      width: '40%', 
      data: element
    })
    editEmployeeListDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        // this.commonServie.deleteEmployee(id);
        // this.dataSource$ = this.commonServie.getEmployeeList();
        // this.commonService.success('Record Updated Successfully')
      }
       
    });
  }

  deleteEmployee(id, element){
    console.log(id, element)
    const deleteEmpDailogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '30%', 
      position : {'top': '3%'},        
       data: element
    });

    deleteEmpDailogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.commonServie.deleteEmployee(id);
        this.dataSource$ = this.commonServie.getEmployeeList();
        this.commonService.success('Record Deleted Successfully')
      }
       
    });
  }

}
