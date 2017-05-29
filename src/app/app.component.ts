import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 32.080218;
  lng: number = 34.802629;
}
