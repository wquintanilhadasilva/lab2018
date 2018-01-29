import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';

@Injectable()
export class GoogleMapsConfig {
  apiKey: string;

  public getApiKey(key: string) {
    this.apiKey = key;
  }
}

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_2CQIF1QH-ITfYysFYcK4HKCzv41VCNY'
    })
  ],
  declarations: [MapsComponent],
  exports: [
    MapsComponent
  ]
})
export class MapsModule { }
