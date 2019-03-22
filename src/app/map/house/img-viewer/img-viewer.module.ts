import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgViewerComponent } from './img-viewer.component';

@NgModule({
  declarations: [ImgViewerComponent],
  imports: [
    CommonModule
  ], exports: [ImgViewerComponent]
})
export class ImgViewerModule { }
