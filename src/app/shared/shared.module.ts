import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanerComponent } from './baner/baner.component';
import { ScVideoComponent } from './sc-video/sc-video.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { ScInputBoxComponent } from './sc-input-box/sc-input-box.component';
import { ScCardComponent } from './sc-card/sc-card.component';
import { CardImgComponent } from './sc-card/components/card-img/card-img.component';
import { CardBodyComponent } from './sc-card/components/card-body/card-body.component';
import { ScToolbarComponent } from './sc-toolbar/sc-toolbar.component';
import { ScSidebarComponent } from './sc-sidebar/sc-sidebar.component';



@NgModule({
  declarations: [
    BanerComponent,
    ScVideoComponent,
    ScInputBoxComponent,
    ScCardComponent,
    CardImgComponent,
    CardBodyComponent,
    ScToolbarComponent,
    ScSidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  exports: [
    BanerComponent,
    ScVideoComponent,
    ScInputBoxComponent,
    CardImgComponent,
    CardBodyComponent,
    ScCardComponent,
    ScToolbarComponent,
    ScSidebarComponent
  ]
})
export class SharedModule { }
