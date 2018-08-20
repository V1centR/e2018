import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomelistComponent } from './homelist';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home';
import { FrontComponent } from './homelist/front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    HomelistComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
