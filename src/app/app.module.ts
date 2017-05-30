import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import {GoogleService} from "./google.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATbHLEJIxXo3yLBciyu5I8mFKIo6Ewjgw'
    })

  ],
  providers: [GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
