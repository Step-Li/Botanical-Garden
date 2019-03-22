import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { HouseComponent } from './house/house.component';
import {ImgViewerComponent} from './house/img-viewer/img-viewer.component';
import {ImgViewerModule} from './house/img-viewer/img-viewer.module';
import {DropdownService} from '../dropdown.service';
import { MarkComponent } from './mark/mark.component';

@NgModule({
  declarations: [MapComponent, HouseComponent, MarkComponent],
  imports: [
    CommonModule, ImgViewerModule
  ], exports: [MapComponent],
  entryComponents: [ImgViewerComponent],
  providers: [DropdownService]
})
export class MapModule { }
