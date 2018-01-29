import { Component } from '@angular/core';
import { GoogleMapsConfig } from 'lab2018';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Using Custom Component Published in Node Package Manager [NPM] Ecossistem';
  constructor(private googleMapsConfig: GoogleMapsConfig) {
    this.googleMapsConfig.getApiKey('AIzaSyC_2CQIF1QH-ITfYysFYcK4HKCzv41VCNY');
  }
}
