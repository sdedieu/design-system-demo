import { OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken } from '@angular/core';

export const SAT_APP_ENTRY_COMPONENT_NAME = new InjectionToken<string>('SatAppEntryComponentName');

@Injectable({ providedIn: 'root' })
export class WebComponentOverlayContainer extends OverlayContainer {
  public constructor(
    @Inject(DOCUMENT)
    private readonly document: Document,
    platform: Platform,
    @Inject(SAT_APP_ENTRY_COMPONENT_NAME) private entryComponentName: string
  ) {
    super(document, platform);
  }

  public override getContainerElement(): HTMLElement {
    if (!this._containerElement || !this.getRootElement().querySelector(`.${this._containerElement.className}`)) {
      this._createContainer();
    }

    return this._containerElement;
  }

  public createContainer(): void {
    this._createContainer();
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

  // In my case - I take this function to separate ShadowDomService
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
