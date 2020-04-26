import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddemployeeComponent } from './hrms/addemployee/addemployee.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ViewemployeeComponent } from './hrms/viewemployee/viewemployee.component';
import { DashboardPspclComponent } from './pspcl/dashboard-pspcl/dashboard-pspcl.component';
import { DashboardHrmsComponent } from './hrms/dashboard-hrms/dashboard-hrms.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'hr/dashboard',component:DashboardHrmsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'pspcl/dashboard',component:DashboardPspclComponent},
  {path:'logout',component:LogoutComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'addemployee',component:AddemployeeComponent},
   {path:'viewemployee',component:ViewemployeeComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
