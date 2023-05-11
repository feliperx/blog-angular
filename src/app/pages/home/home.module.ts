import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BigCardComponent } from './big-card/big-card.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    BigCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
