import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class GoogleService {

  constructor(private _http: Http) { }

  getInfo(street: string, city: string){
    return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+street+',+'+city+',+israel&key=AIzaSyATbHLEJIxXo3yLBciyu5I8mFKIo6Ewjgw')
      .map(
        (response: Response)=> {
          const data = response.json();
          return data;
        }
      )

  }

}
