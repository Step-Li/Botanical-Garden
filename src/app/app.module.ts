import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MapModule} from './map/map.module';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MapModule, OverlayModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
