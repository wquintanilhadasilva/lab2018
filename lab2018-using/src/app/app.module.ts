import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MapsModule } from 'lab2018';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
