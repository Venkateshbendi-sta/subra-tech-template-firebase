import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScCommonService {
  toolBarItemSub:Subject<any> = new Subject<any>;
  toolBarItemClickSub$: Observable<any> = this.toolBarItemSub.asObservable();

  toolBarMenuItemSub:Subject<any> = new Subject<any>;
  toolBarMenuItemClickSub$: Observable<any> = this.toolBarMenuItemSub.asObservable();

  activeMenuItemId!:string;
  constructor() { }

  sendToolbarItemClickTriger(data:any){
    this.toolBarItemSub.next(data);
  }
  sendToolbarMenuItemClickTriger(data:any){
    this.toolBarMenuItemSub.next(data);
  }
  setActiveMenuId(id:string){
    this.activeMenuItemId = id;
  }
  getActiveMenuId(){
    return this.activeMenuItemId;
  }
}
