import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 
import {MatSnackBar} from '@angular/material/snack-bar'; 
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/guard/auth-service.service';
import { CommonService } from 'src/app/service/common.service';
import { Register } from './registerPage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerPageForm: FormGroup;
  registerPageDetails: Register[] = [];
  isEditItem;
  alreadyEmailExist = false;
  constructor(private fb: FormBuilder, 
              public router: Router, 
              private _snackBar: MatSnackBar, 
              private commonService: CommonService,
              private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.authService.getIsLoggedInDetails(false);
    this.registerPageForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      company: ["", Validators.required],
      birthDate: ["", Validators.required],
      address: ["", Validators.required],
     
    });

    // Get register details from localstorage and check if email exist
     this.registerPageDetails = localStorage.getItem('register-page-Details')? JSON.parse(localStorage.getItem('register-page-Details')):[];

    this.registerPageForm.get("email").valueChanges.subscribe(value => {
      if(this.registerPageDetails) {
        let checkEmailExist = this.registerPageDetails.some(item =>{
          return item.email === value;      
        });
        if(checkEmailExist){
          this.alreadyEmailExist = true;
        } else{
          this.alreadyEmailExist = false;
        }
      }
   })

  }

  onSubmit(registerPageForm){
    if (registerPageForm.valid) { 
      this.registerPageDetails.push(registerPageForm.value);
       localStorage.setItem("register-page-Details", JSON.stringify(this.registerPageDetails));
      this.commonService.success('Registration Successful');
      this.router.navigate(['/login'])
    }
  }

}
