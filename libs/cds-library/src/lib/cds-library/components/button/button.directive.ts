import { AfterContentInit, Directive, Inject, InjectionToken, Input, Optional } from '@angular/core';
import { CdsSemanticVariations, CdsSize, CdsType } from './theming.model';

export type CdsButtonColor = Extract<CdsSemanticVariations, 'accent' | 'primary' | 'secondary' | 'destructive'>;

export interface CdsButtonDefaultOptions {
  color?: CdsButtonColor;
  type?: CdsType;
  size?: CdsSize;
}

export const CDS_BUTTON_DEFAULT_OPTIONS = new InjectionToken<CdsButtonDefaultOptions>('CDS_BUTTON_DEFAULT_OPTIONS');

export const CDS_BUTTON_HOST = {
  '[attr.cds-size]': '_size || null',
  '[attr.cds-type]': '_type || null',
  '[class]': '_color ? "cds-button mat-" + _color : "cds-button"',
};

@Directive({
  selector: `button[mat-button], button[mat-raised-button], button[mat-flat-button],
    button[mat-stroked-button], button[mat-icon-button], a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button], a[mat-icon-button]`,
  host: CDS_BUTTON_HOST,
})
export class CdsButtonDirective implements AfterContentInit {
  private _size: CdsSize = 'medium';
  private _type!: CdsType;
  private _color!: CdsButtonColor;

  @Input('color')
  set color(color: CdsButtonColor) {
    this._color = this._defaultOptions?.color || color;
  }

  @Input('cds-size')
  set size(size: CdsSize) {
    this._size = this._defaultOptions?.size || size;
  }

  @Input('cds-type')
  set type(type: CdsType) {
    this._type = this._defaultOptions?.type || type;
  }

  constructor(
    @Optional()
    @Inject(CDS_BUTTON_DEFAULT_OPTIONS)
    private _defaultOptions?: CdsButtonDefaultOptions
  ) {}

  ngAfterContentInit(): void {
    this._size = this._defaultOptions?.size || this._size;
    this._type = this._defaultOptions?.type || this._type;
    this._color = this._defaultOptions?.color || this._color;
  }
}
