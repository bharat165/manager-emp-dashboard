import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../components/home-page/employee-list/employee';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  employeeDataList: Employee[] = [
    {firstName: 'Rahul', lastName: 'Bagve', address: 'Pune', birthDate: '05/18/1999', mobile:111111111, city: 'Pune' },
    {firstName: 'Bharat', lastName: 'Jadhav', address: 'Pune', birthDate: '05/22/1999', mobile:111111111, city: 'Delhi' },

  ];

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }


  success(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'success', duration, verticalPosition, horizontalPosition, action);
  }

  error(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'error', duration, verticalPosition, horizontalPosition, action);
  }


  private openSnackBar(message, type, duration?, verticalPosition?, horizontalPosition?, action?) {
    const messageConfig: any = {
      defaultShowMessageTime: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    };
    if (!duration) {
      duration = messageConfig.defaultShowMessageTime;
    }
    if (!verticalPosition) {
      verticalPosition = messageConfig.verticalPosition;
    }
    if (!horizontalPosition) {
      horizontalPosition = messageConfig.horizontalPosition;
    }
    const verPo: MatSnackBarVerticalPosition = verticalPosition;
    const horPo: MatSnackBarHorizontalPosition = horizontalPosition;
    let extraClasses;

    if (type === 'error') {
      extraClasses = ['error-snackbar'];
    } else if (type === 'success') {
      extraClasses = ['success-snackbar'];
    }
    const config = new MatSnackBarConfig();
    config.verticalPosition = verPo;
    config.horizontalPosition = horPo;
    config.duration = duration;
    config.panelClass = extraClasses;
    setTimeout(() => {
      this._snackBar.open( message, action, config);
    }, 100);
  }

 


}
