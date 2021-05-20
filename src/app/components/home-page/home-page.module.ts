import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material/material.module';
import {AppHomepageRoutingModule} from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';


@NgModule({
  declarations: [
    HomePageComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    CommonModule,
    AppHomepageRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  entryComponents: [AddEmployeeComponent, DeleteEmployeeComponent]
})
export class HomePageModule {
  constructor(){
    console.log('homepage loaded')
  }
  
 }
