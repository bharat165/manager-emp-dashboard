import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/guard/auth-service.service';
import { CommonService } from 'src/app/service/common.service';
import { Register } from '../register/registerPage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogInMode: boolean;
  registerPageDetails: Register[] = [];

  constructor(public router: Router, public authService : AuthServiceService,
    public commonService: CommonService
   ) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(name => this.isLogInMode = name);
    if(this.authService.isLoggedIn()) {
      this.isLogInMode = true;
    }
  }

  logout(){
    localStorage.removeItem('LoggedInUser');
    this.authService.getIsLoggedInDetails(false)
    this.router.navigate(['/login']);
  }

}
