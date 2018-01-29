import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LAZY_MAPS_API_CONFIG } from '@agm/core';
import { MapsModule, GoogleMapsConfig } from './modules/maps/maps.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapsModule
  ],
  providers: [{ provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
