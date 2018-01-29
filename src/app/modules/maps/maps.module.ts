import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';

/**
 * Service que irá passar para o componente de terceiros -AgmCoreModule, a chave do google maps api
 *
 */
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
    AgmCoreModule.forRoot()
  ],
  declarations: [MapsComponent],
  exports: [
    MapsComponent
  ],
  providers: [ GoogleMapsConfig ] // injeta o service
})
export class MapsModule { }
