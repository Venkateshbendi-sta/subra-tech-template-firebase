import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLandingRoutingModule } from './user-landing-routing.module';
import { UserLandingDashboardComponent } from './user-landing-dashboard/user-landing-dashboard.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserLandingDashboardComponent
  ],
  imports: [
    CommonModule,
    UserLandingRoutingModule,
    MaterialImportsModule,
    SharedModule
  ]
})
export class UserLandingModule { }
