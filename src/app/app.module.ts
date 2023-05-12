import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './pages/home/home.component';

import {BigTitleComponent} from './components/big-title/big-title.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {BigCardComponent} from './components/big-card/big-card.component';
import {SmallCardComponent} from './components/small-card/small-card.component';
import { LineDividerComponent } from './components/line-divider/line-divider.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    BigTitleComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent,
    LineDividerComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
