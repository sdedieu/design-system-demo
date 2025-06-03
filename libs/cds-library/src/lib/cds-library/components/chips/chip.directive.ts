import { Directive } from '@angular/core';

export const CDS_CHIP_HOST = {
  '[class.cds-chip]': 'true',
};

@Directive({
  selector: `mat-chip`,
  host: CDS_CHIP_HOST,
})
export class CdsChipDirective {}
