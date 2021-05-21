import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/guard/auth-service.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public commonServie: CommonService, public authService: AuthServiceService) { }

  ngOnInit(): void {
    //
    this.authService.getIsLoggedInDetails(true);
  }

}
