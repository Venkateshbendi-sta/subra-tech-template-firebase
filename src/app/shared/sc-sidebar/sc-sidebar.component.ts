import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ScCommonService } from '../sc-common.service';
import { SCConstants } from '../../constants';

@Component({
  selector: 'app-sc-sidebar',
  templateUrl: './sc-sidebar.component.html',
  styleUrl: './sc-sidebar.component.scss',
})
export class ScSidebarComponent {
  showFiller = false;
  @ViewChild('drawer') drawer!: MatDrawer;
  @Input() sideMenuItems: any = {};
  @Output() click: EventEmitter<any> = new EventEmitter<any>();
  @Input() showBrand = true;
  @Input() activeMenuItem!:any;
  
  logo = '../assets/images/plain-logo.svg';
  constants= SCConstants;
  constructor(private service: ScCommonService) {
    this.service.toolBarMenuItemClickSub$.subscribe((toolbarItem: any) => {
     this.toggleSideBar();
    });
    if(this.service.getActiveMenuId()){
      this.activeMenuItem = this.service.getActiveMenuId();
    }
  }

  toggleSideBar(){
    this.drawer.toggle();
  }
  menuItemClick(sideMenu: any) {
    this.drawer.toggle();
    this.click.emit({ selectedMenu: sideMenu, drawerRef: this.drawer });
    this.activeMenuItem = sideMenu.main.id
  }

}
