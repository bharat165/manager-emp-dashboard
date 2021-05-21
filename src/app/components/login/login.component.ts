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
    // Get register page details from localstorage  
    this.getLoginDetails = JSON.parse(localStorage.getItem('register-page-Details'));
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]      
    });
  }

  
  // Get login details
    submitForm(loginForm: FormGroup){
    if(loginForm.valid){      
      if(this.getLoginDetails){        
        let checkEmailExist = this.getLoginDetails.some(item =>{
          return item.email === loginForm.value.email && item.password === loginForm.value.password          
        });

        if(checkEmailExist){
          this.authService.setToken(loginForm.value.email)
            this.authService.getIsLoggedInDetails(true);
            this.commonService.success('Succesfully logIn');           
            this.router.navigate(['home-page']);
        }else {              
              this.commonService.error('Please check credentials');
            }

      } 
      else {
        this.commonService.error('Please register with your mail id');
      }
    }
  }



}
