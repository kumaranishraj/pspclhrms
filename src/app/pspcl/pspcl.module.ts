import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PspclRoutingModule } from './pspcl-routing.module';
import { DashboardPspclComponent } from './dashboard-pspcl/dashboard-pspcl.component';


@NgModule({
  declarations: [ DashboardPspclComponent],
  imports: [
    CommonModule,
    PspclRoutingModule
  ]
})
export class PspclModule { }
