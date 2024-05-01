import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingDashboardComponent } from './user-landing-dashboard/user-landing-dashboard.component';

const routes: Routes = [{path:'', component: UserLandingDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLandingRoutingModule { }
