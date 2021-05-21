import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../components/home-page/employee-list/employee';
import { AuthServiceService } from '../guard/auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
    //Default Employee list
    employeeDataList$: BehaviorSubject<Employee[]> = new BehaviorSubject ([
    {firstName: 'Rahul', lastName: 'Bagve', address: 'Pune', birthDate: '05/18/1999', mobile:111111111, city: 'Pune' },
    {firstName: 'Bharat', lastName: 'Jadhav', address: 'Pune', birthDate: '05/22/1999', mobile:111111111, city: 'Delhi' },

  ]);

  constructor(private http: HttpClient, private _snackBar: MatSnackBar,
    public authService: AuthServiceService) { }

  //Dynamic snackbar message   
  success(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'success', duration, verticalPosition, horizontalPosition, action);
  }

  error(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'error', duration, verticalPosition, horizontalPosition, action);
  }


  private openSnackBar(message, type, duration?, verticalPosition?, horizontalPosition?, action?) {
    const messageConfig: any = {
      defaultShowMessageTime: 2000,
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

  //Get initials of loggedIn user
  getUserInitials() {
    const registerPageDetails = JSON.parse(localStorage.getItem('register-page-Details'));
    const loggedInUser = this.authService.getToken();

    if(loggedInUser){
      const getLoggedInUser = registerPageDetails.filter((item)=>{
        return item.email === loggedInUser
   })[0];

   return (getLoggedInUser.firstName.charAt(0) + getLoggedInUser.lastName.charAt(0)).toUpperCase();
    }
  }
//Get Employee Data
  getEmployeeList() {
    return this.employeeDataList$;
  }

  //Save Employee Data
  saveEmployee(employee) {
    this.employeeDataList$.next(this.employeeDataList$.getValue().concat(employee));
  }
  //Delete Employee Data
  deleteEmployee(employeeId) {
    this.employeeDataList$.next(this.employeeDataList$.getValue().filter((list, index) => (index !==employeeId)));
  }
  //Edit Employee Data
  editEmployee(index:number,employee) { 
    this.deleteEmployee(index);
    let updatedArray = this.employeeDataList$.getValue();
    updatedArray.splice(index,0,employee);
    this.employeeDataList$.next(updatedArray);
  }

 

}

