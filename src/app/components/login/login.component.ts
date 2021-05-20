import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/guard/auth-service.service';
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

  constructor(public router: Router, 
              private fb: FormBuilder, 
              private _snackBar: MatSnackBar, 
              private commonService: CommonService,
              private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.authService.getIsLoggedInDetails(false);
    
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
      if(this.getLoginDetails){
        
        let checkEmailExist = this.getLoginDetails.some(item =>{

          return item.email === loginForm.value.email && item.password === loginForm.value.password
          
        });

        console.log(checkEmailExist)

        if(checkEmailExist){
          this.authService.setToken(loginForm.value.email)
            this.authService.getIsLoggedInDetails(true);
            this.commonService.success('Succesfully logIn');
            this.router.navigate(['home-page']);
        }else {
              console.log('Check details');
              this.commonService.error('Please check credentials');
            }

      } 
    }
  }



}
