import {Component, Inject, OnInit} from '@angular/core';
import {FILE_PREVIEW_DIALOG_DATA} from '../../../overlay.tokens';
import {OverlayController} from '../../../overlay-controller';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {

  site = false;

  constructor(public dialogRef: OverlayController, @Inject(FILE_PREVIEW_DIALOG_DATA) public image: any,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  siteUrl() {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(this.image.siteUrl);
    console.log(url);
    return url;
  }

}
