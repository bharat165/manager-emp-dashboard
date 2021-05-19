import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { EmployeeData } from '../components/dashboard/employee';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoggedIn = new Subject<boolean>();
  updatedIsLoggedIn = this.isLoggedIn.asObservable();

  url = 'http://dummy.restapiexample.com/api/v1';
  // postApi = 'http://dummy.restapiexample.com/api/v1/create'

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  getIsLoggedInDetails(value:boolean) {
    this.isLoggedIn.next(value);
  }

  logOut() {
    localStorage.setItem('isLoggedIn', 'false');
  }


  getEmployeeData() : Observable<EmployeeData[]> {  

    return this.http.get<EmployeeData[]>(this.url + '/employees' )
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   
  }

  updateEmployeeData(data,ulrObj) : Observable<EmployeeData[]> {  

    return this.http.put<EmployeeData[]>(this.url + '/update' + '/' + data.id ,  JSON.stringify(ulrObj))
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   
  }

  createEmployeeData(data) : Observable<EmployeeData[]> {
    return this.http.post<EmployeeData[]>(this.url + '/create',  JSON.stringify(data))
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
    }

    deleteEmployeeData(id) : Observable<EmployeeData[]> {  

      return this.http.delete<EmployeeData[]>(this.url + '/delete' + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
     
    }
    

  handleError(error) {
    console.log()
    let errorMessage = '';
    errorMessage = `Error: ${error.error.message}`;
    window.alert(errorMessage);
  
  
    return throwError(errorMessage);
  }



}
