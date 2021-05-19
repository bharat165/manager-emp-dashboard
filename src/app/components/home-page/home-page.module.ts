import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHomepageRoutingModule} from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    HomePageComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    AppHomepageRoutingModule
  ]
})
export class HomePageModule {
  constructor(){
    console.log('homepage loaded')
  }
  
 }
