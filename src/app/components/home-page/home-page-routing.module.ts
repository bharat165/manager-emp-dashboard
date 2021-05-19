import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/guard/authentication.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomePageComponent } from './home-page.component';


const routes: Routes = [
{
    path: '',
    component: HomePageComponent, canActivate:[AuthenticationGuard],
    children: [
        {
            path: '',
            redirectTo: 'employee-list',
            pathMatch: 'full'
        },
        {
            path: 'employee-list',
            component: EmployeeListComponent
        }
    ]
}
  

  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppHomepageRoutingModule { }









// import { Routes } from '@angular/router';
// import { RouterModule } from  '@angular/router';



// const routes: Routes = [
//     // { path: '', component: LoginComponent },
//     // { path: 'dashboard', component: dashboardComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AppHomepageRoutingModule { }