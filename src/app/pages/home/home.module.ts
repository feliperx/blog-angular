import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BigCardComponent } from './big-card/big-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { BigTitleComponent } from './big-title/big-title.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent,
    BigTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent,
    BigTitleComponent
  ]
})
export class HomeModule { }
