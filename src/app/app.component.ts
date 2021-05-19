import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './guard/auth-service.service';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title;


  constructor(public commonService: CommonService){

  }

}
