import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/guard/auth-service.service';
import { Register } from '../register/registerPage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogInMode: boolean;
  registerPageDetails: Register[] = [];
  getLoggInInitials: string = '';
  

  constructor(public router: Router, public authService : AuthServiceService,
   ) { }

  ngOnInit(): void {
 
    this.getUserInitials();
    this.authService.loggedIn.subscribe(name => this.isLogInMode = name);
    if(this.authService.isLoggedIn()) {
      this.isLogInMode = true;
      
     }

     
 

  }

  getUserInitials() {
    this.registerPageDetails = JSON.parse(localStorage.getItem('register-page-Details'));
    console.log(this.registerPageDetails)
    const loggedInUser = this.authService.getToken();
    console.log(loggedInUser)

    if(loggedInUser){
      const getLoggedInUser = this.registerPageDetails.filter((item)=>{
        return item.email === loggedInUser
   })[0];

   this.getLoggInInitials = (getLoggedInUser.firstName.charAt(0) + getLoggedInUser.lastName.charAt(0)).toUpperCase();
    }


  }


  logout(){
    localStorage.removeItem('LoggedInUser');
    this.authService.getIsLoggedInDetails(false)
    this.router.navigate(['/login']);
  }

}
