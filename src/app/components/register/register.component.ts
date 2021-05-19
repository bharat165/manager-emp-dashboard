import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 
import {MatSnackBar} from '@angular/material/snack-bar'; 
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, public router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerPageForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
     
    });

    

    if(this.isEditItem){
      // this.registerPageForm.setValue(this.isEditItem);      
    } else{
      // this.registerPageForm.reset();
    }
  }

 

  onSubmit(registerPageForm){
    if (registerPageForm.valid) {
      console.log(registerPageForm.value)
      console.log(registerPageForm.value.password)
      console.log(registerPageForm.value.confirmPassowrd)
      if(registerPageForm.value.password === registerPageForm.value.confirmPassword){
        this.registerPageDetails.push(registerPageForm.value);
       localStorage.setItem("register-page-Details",JSON.stringify(this.registerPageDetails));

      } else {
                  this._snackBar.open('Entered password doesnot match', '', {
            duration: 3000,
            panelClass: ['error-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        
      }



      // this.registerPageDetails.push(registerPageForm.value);
      // console.log(this.registerPageDetails)

//       this.registerPageDetails.(item=>{
//         if(item.passowrd == item.confirmPassowrd){
// // sessionStorage.setItem(
//       //   "register-page-Details",
//       //   JSON.stringify(this.registerPageDetails)
//       // );

//       // this.router.navigate(['login'])
//         } else{         

//           this._snackBar.open('Entered password doesnot match', '', {
//             duration: 3000,
//             panelClass: ['error-snackbar'],
//             horizontalPosition: 'right',
//             verticalPosition: 'top'
//           });
//         }
//       });
      
     
      // this.registerPageForm.reset();
      
    }
  }

}
