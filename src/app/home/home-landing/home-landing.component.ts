import { Component } from '@angular/core';
import { SCConstants } from '../../constants';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.scss',
})
export class HomeLandingComponent {
  constants: any = SCConstants;

}
