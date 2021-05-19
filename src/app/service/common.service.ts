import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoggedIn = new Subject<boolean>();
  updatedIsLoggedIn = this.isLoggedIn.asObservable();

  url = 'http://dummy.restapiexample.com/api/v1';
  // postApi = 'http://dummy.restapiexample.com/api/v1/create'

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  success(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'success', duration, verticalPosition, horizontalPosition, action);
  }

  error(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'error', duration, verticalPosition, horizontalPosition, action);
  }


  private openSnackBar(message, type, duration?, verticalPosition?, horizontalPosition?, action?) {
    const messageConfig: any = {
      defaultShowMessageTime: 4000,
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




  getIsLoggedInDetails(value:boolean) {
    this.isLoggedIn.next(value);
  }

  logOut() {
    localStorage.setItem('isLoggedIn', 'false');
  }


  // getEmployeeData() : Observable<EmployeeData[]> {  

  //   return this.http.get<EmployeeData[]>(this.url + '/employees' )
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   );
   
  // }

  // updateEmployeeData(data,ulrObj) : Observable<EmployeeData[]> {  

  //   return this.http.put<EmployeeData[]>(this.url + '/update' + '/' + data.id ,  JSON.stringify(ulrObj))
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   );
   
  // }

  // createEmployeeData(data) : Observable<EmployeeData[]> {
  //   return this.http.post<EmployeeData[]>(this.url + '/create',  JSON.stringify(data))
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   );
  //   }

  //   deleteEmployeeData(id) : Observable<EmployeeData[]> {  

  //     return this.http.delete<EmployeeData[]>(this.url + '/delete' + '/' + id)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
     
  //   }
    

  // handleError(error) {
  //   console.log()
  //   let errorMessage = '';
  //   errorMessage = `Error: ${error.error.message}`;
  //   window.alert(errorMessage);
  
  
  //   return throwError(errorMessage);
  // }



}
