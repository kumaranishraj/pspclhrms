import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HrmsRoutingModule } from './hrms/hrms-routing.module';
import { PspclRoutingModule } from './pspcl/pspcl-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {RegistrationComponent} from './auth/registration/registration.component';
import {LoginComponent} from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import{AddemployeeComponent} from './hrms/addemployee/addemployee.component';
import{ViewemployeeComponent} from './hrms/viewemployee/viewemployee.component';
import { HomeComponent } from './home/home.component';
import {EmployeeService} from './auth/employee.service';
import { DashboardPspclComponent } from './pspcl/dashboard-pspcl/dashboard-pspcl.component';
import { DashboardHrmsComponent } from './hrms/dashboard-hrms/dashboard-hrms.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    HomeComponent,
    DashboardHrmsComponent,
    DashboardPspclComponent,
    ChangepasswordComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    HrmsRoutingModule,
    PspclRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
