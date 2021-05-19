import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonService } from 'src/app/service/common.service';
import { CreateEmpDataComponent } from './create-emp-data/create-emp-data.component';
import { EmployeeData } from './employee';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  empData: EmployeeData[] = [];
  constructor(public dialog: MatDialog, private service: CommonService) { }

  ngOnInit(): void {
    this.getEmpDetails();
  }

  getEmpDetails(){
    this.service.getEmployeeData().subscribe(resp =>{
      console.log('data', resp['data']);
       this.empData = resp['data'];
    });
  }

 

  createEmpData() {
    const dialogRef = this.dialog.open(CreateEmpDataComponent, {
      width: '40%',      
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
         this.postEmpDataToServer(result);
    });
  }

  postEmpDataToServer(data) {
    this.service.createEmployeeData(data).subscribe(resp =>{
      console.log('Data posted', resp);
      this.getEmpDetails();
    });
  }

  editData(ele){
    console.log(ele)
    const dialogRef = this.dialog.open(CreateEmpDataComponent, {
      width: '40%',      
       data: ele
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed', result);
        this.putEmpDataToServer(result);
    });
  }

  putEmpDataToServer(data) {
    const obj = {
      'name':data.name,
      'salary': data.salary,
      'age':data.age
    }
    this.service.updateEmployeeData(data,obj).subscribe(resp =>{
      console.log('Data posted', resp);
      this.getEmpDetails();
    });
  }

  deleteData(id) {
    this.service.deleteEmployeeData(id).subscribe(resp =>{
      console.log('Data deleted', resp);
      this.getEmpDetails();
    });
  }

}
