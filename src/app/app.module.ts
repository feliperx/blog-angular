import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BigTitleComponent} from './components/big-title/big-title.component';
import {HomeComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
