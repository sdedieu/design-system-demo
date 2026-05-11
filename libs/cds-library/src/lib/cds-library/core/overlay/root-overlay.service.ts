import { OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';

import { Inject, Injectable, InjectionToken, DOCUMENT } from '@angular/core';

export const SAT_APP_ENTRY_COMPONENT_NAME = new InjectionToken<string>('SatAppEntryComponentName');

@Injectable({ providedIn: 'root' })
export class WebComponentOverlayContainer extends OverlayContainer {
  public constructor(
    @Inject(DOCUMENT)
    private readonly document: Document,
    platform: Platform,
    @Inject(SAT_APP_ENTRY_COMPONENT_NAME) private readonly entryComponentName: string
  ) {
    super(document, platform);
  }

  public override getContainerElement(): HTMLElement {
    if (!this._containerElement || !this.getRootElement().querySelector(`.${this._containerElement.className}`)) {
      this._createContainer();
    }

    return this._containerElement!;
  }

  protected override _createContainer(): void {
    super._createContainer();
    this._appendToRootComponent();
  }

  private _appendToRootComponent(): void {
    if (!this._containerElement) {
      return;
    }

    const rootElement = this.getRootElement();

    rootElement.appendChild(this._containerElement);
  }

  private getRootElement(): ShadowRoot | HTMLElement {
    const shellShadowRoot = this.document.querySelector('ds-shl-root')?.shadowRoot;
    return (
      this.document.querySelector(this.entryComponentName)?.shadowRoot ??
      shellShadowRoot?.querySelector(this.entryComponentName)?.shadowRoot ??
      shellShadowRoot ??
      this.document.body
    );
  }
}
