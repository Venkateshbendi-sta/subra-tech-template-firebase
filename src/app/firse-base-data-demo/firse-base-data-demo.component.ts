import { Component } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { SCFirebaseConstants } from '../fire-base-constnats';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firse-base-data-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firse-base-data-demo.component.html',
  styleUrl: './firse-base-data-demo.component.scss'
})
export class FirseBaseDataDemoComponent {
  allData:any[] = []
 constructor(private api: ApiCallsService){
  this.getData();
 }
 getData(){
  this.api.getAllSnapshotsFormated(SCFirebaseConstants.collections.courses).subscribe({next:(res)=>{
      console.log('responseeeeeeee');
      console.log(res)
      this.allData = res;
      console.log('all dataaa');
      console.log(this.allData)
  }})
 }

 addItem(){
    this.api.addItem(SCFirebaseConstants.collections.courses, {title:'etsst',course:'java'})
 }
 updateItem(id:string){
  this.api.updateItem(SCFirebaseConstants.collections.courses, {title:'etsst111',course:'java'},id).then((res:any)=>{

  }).catch((err)=>{

  })
}
deleteItem(id:string){
  this.api.deleteItem(SCFirebaseConstants.collections.courses, id).then((res)=>{
    console.log(res)
  })
}
}
