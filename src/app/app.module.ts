import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomelistComponent } from './homelist';
import { HomeModule } from './home';
import { AppRoutingModule } from './app-routing.module';
import { AvatarModule } from 'ngx-avatar';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    TableModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
