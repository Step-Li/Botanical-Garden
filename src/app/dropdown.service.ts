import {ComponentRef, Injectable, Injector} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {ImgViewerComponent} from './map/house/img-viewer/img-viewer.component';
import {OverlayController} from './overlay-controller';
import {FILE_PREVIEW_DIALOG_DATA} from './overlay.tokens';

export interface Image {
  name: string;
  urls: [string];
  text: string;
  siteUrl: string;
}

interface Config {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: Image;
}
const DEFAULT_CONFIG: Config = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
};

@Injectable()
export class DropdownService {

  constructor(
    private injector: Injector, private overlay: Overlay) {
  }

  open(config: Config = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new OverlayController(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private getOverlayConfig(config: Config): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
      width: '80%',
      height: '80%'
    });

    return overlayConfig;
  }

  private createOverlay(config: Config) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }
  private createInjector(config: Config, dialogRef: OverlayController): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(OverlayController, dialogRef);
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config.data);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }
  private attachDialogContainer(overlayRef: OverlayRef, config: Config, dialogRef: OverlayController) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(ImgViewerComponent, null, injector);
    const containerRef: ComponentRef<ImgViewerComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }



}
