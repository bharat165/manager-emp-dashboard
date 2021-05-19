import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/guard/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogInMode: boolean;
  constructor(public router: Router, public authService : AuthServiceService) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(name => this.isLogInMode = name);
    if(localStorage.getItem('LoggedInUser')) {
      this.isLogInMode = true;
     }
  }

  logout(){
    localStorage.removeItem('LoggedInUser');
    this.authService.getIsLoggedInDetails(false)
    this.router.navigate(['/login']);
  }

}
