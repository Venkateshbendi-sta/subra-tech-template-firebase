import { Component } from '@angular/core';
import { SCConstants } from '../../constants';
import { Firestore } from '@angular/fire/firestore';
import { ApiCallsService } from '../../api-calls.service';

@Component({
  selector: 'app-user-landing-dashboard',
  templateUrl: './user-landing-dashboard.component.html',
  styleUrl: './user-landing-dashboard.component.scss'
})
export class UserLandingDashboardComponent {
  showFiller = false;
  constants = SCConstants;
  constructor(private api:ApiCallsService){
    this.getCourses()
  }
  getCourses(){
    this.api.getAll('courses').subscribe({
      next:(data:any)=>{
        console.log(data)
      }
    })
  }
}
