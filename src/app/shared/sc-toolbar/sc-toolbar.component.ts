import { Component, Input } from '@angular/core';
import { SCConstants } from '../../constants';
import { ScCommonService } from '../sc-common.service';

@Component({
  selector: 'app-sc-toolbar',
  templateUrl: './sc-toolbar.component.html',
  styleUrl: './sc-toolbar.component.scss'
})
export class ScToolbarComponent {
  title = 'subraTech-client';
  constants= SCConstants;
  logo = '../assets/images/plain-logo.svg';
  @Input() menuItemsDesktop:any =[];
  @Input() menuItemsMobile:any =[];
  @Input() toggleMenu:string ='menu';
  @Input() isShowLogo:boolean = true;
  constructor(private service:ScCommonService){

  }
  toolbarMenuItemClick(toolBarItem:any){
    if(toolBarItem.id == this.toggleMenu){
      this.service.sendToolbarMenuItemClickTriger(toolBarItem);
    }
   
  }
}
