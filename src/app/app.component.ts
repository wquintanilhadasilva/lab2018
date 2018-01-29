import { Component } from '@angular/core';
import { GoogleMapsConfig } from './modules/maps/maps.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private googleMapsConfig: GoogleMapsConfig) {
    this.googleMapsConfig.getApiKey('AIzaSyC_2CQIF1QH-ITfYysFYcK4HKCzv41VCNY');
  }
}
