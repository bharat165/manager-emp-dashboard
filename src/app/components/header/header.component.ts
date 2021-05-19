import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogInMode = false;
  constructor(private router: Router, private service: CommonService) { }

  ngOnInit(): void {
    this.service.updatedIsLoggedIn.subscribe(result =>{
      setTimeout(()=>{
        this.isLogInMode = result;       
      }, 0)
    })
   

  }

  logout(){
    this.service.getIsLoggedInDetails(false);
    this.router.navigate(['/login'])
  }

}
