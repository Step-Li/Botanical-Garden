import {OverlayRef} from '@angular/cdk/overlay';

export class OverlayController {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
