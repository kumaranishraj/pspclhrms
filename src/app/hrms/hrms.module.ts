import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmsRoutingModule } from './hrms-routing.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { DashboardHrmsComponent } from './dashboard-hrms/dashboard-hrms.component';


@NgModule({
  declarations: [AddemployeeComponent, ViewemployeeComponent, DashboardHrmsComponent],
  imports: [
    CommonModule,
    HrmsRoutingModule
  ]
})
export class HrmsModule { }
