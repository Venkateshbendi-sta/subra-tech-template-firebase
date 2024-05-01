import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeRoutingModule } from './home-routing';
import { CommonImportsModule } from '../common-imports/common-imports.module';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonImportsModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
