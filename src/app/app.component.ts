import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { CommonImportsModule } from './common-imports/common-imports.module';
import { SCConstants } from './constants';
import { FirseBaseDataDemoComponent } from './firse-base-data-demo/firse-base-data-demo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialImportsModule,CommonImportsModule,FirseBaseDataDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'subraTech-client';
  constants= SCConstants;
  logo = '../assets/images/plain-logo.svg'
}
