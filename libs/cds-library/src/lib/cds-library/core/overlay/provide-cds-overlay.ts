import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { SAT_APP_ENTRY_COMPONENT_NAME, WebComponentOverlayContainer } from './root-overlay.service';

/**
 * Re-provides the overlay/dialog stack at the current injector level so
 * that `MatDialog` (and CDK overlays in general) attach to the shadow
 * root resolved from the LOCALLY-provided `SAT_APP_ENTRY_COMPONENT_NAME`.
 *
 * Internally, `MatDialog` -> CDK `Dialog` -> `Overlay` -> `OverlayContainer`
 * are all `providedIn: 'root'`. To make injection truly hierarchical we
 * have to re-provide every link of the chain at the scope that overrides
 * the entry component name; otherwise the root `MatDialog` is reused and
 * keeps using the root `OverlayContainer`.
 *
 * Use at the application root and at every route that overrides
 * `SAT_APP_ENTRY_COMPONENT_NAME`.
 */
export function provideCdsOverlay(entryComponentName: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: SAT_APP_ENTRY_COMPONENT_NAME, useValue: entryComponentName },
    WebComponentOverlayContainer,
    { provide: OverlayContainer, useExisting: WebComponentOverlayContainer },
    Overlay,
    Dialog,
    MatDialog,
  ]);
}
