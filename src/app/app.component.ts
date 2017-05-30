import { Component } from '@angular/core';
import {GoogleService} from "./google.service";
import { Response } from '@angular/http';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private gserv: GoogleService){}
  coordinates: Object = {
    lat:32.0804437,
    lng:34.804843
  };
  street: string = '';
  city: string = '';
/*  lat: number = 32.0804437;
  lng: number = 34.804843;*/

  onGetInfo(){
    this.gserv.getInfo(this.street, this.city)
      .subscribe(

         (data: any)=> {
         this.coordinates = _.get(data, ['results', '0', 'geometry', 'location'])

         },
        (error)=> console.log(error)
      );

  }
}
