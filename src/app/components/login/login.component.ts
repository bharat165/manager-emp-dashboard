import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  getLoginDetails: any;
  isLogin: boolean = true;

  constructor(public router: Router, private fb: FormBuilder, private _snackBar: MatSnackBar, private service: CommonService) { }

  ngOnInit(): void {
    this.getLoginDetails = JSON.parse(localStorage.getItem('register-page-Details'));
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]      
    });
  }

  

  submitForm(loginForm: FormGroup){
    if(loginForm.valid){
      console.log(this.getLoginDetails)
      console.log(loginForm.value)

      // if(this.getLoginDetails){
      //   this.getLoginDetails.forEach(item =>{
      //     if(item.firstName === loginForm.value.username && item.password === loginForm.value.password ){
      //       console.log('Login success')
      //       localStorage.setItem('isLoggedIn', 'true');
      //       this.service.getIsLoggedInDetails(true);
      //       this.isLogin = true;
      //       this.router.navigate(['/dashboard']);
      //     } else {
      //       console.log('Check details');
      //       this._snackBar.open('User not exist', '', {
      //         duration: 3000,
      //         panelClass: ['error-snackbar'],
      //         horizontalPosition: 'right',
      //         verticalPosition: 'top'
      //       });
      //       this.isLogin = false;
      //     }
      //   });
      // }

      


    }
  }

}
