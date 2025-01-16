import { Directive } from '@angular/core';

export const CDS_DIVIDER_HOST = {
  class: 'cds-divider',
};

@Directive({
  selector: `mat-divider`,
  host: CDS_DIVIDER_HOST,
})
export class CdsDividerDirective {}
