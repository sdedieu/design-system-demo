import { Directive } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CDS_BUTTON_DEFAULT_OPTIONS } from '../button/button.directive';

@Directive({
  selector: `table[mat-table], mat-table`,
  standalone: true,
  providers: [
    {
      provide: CDS_BUTTON_DEFAULT_OPTIONS,
      useValue: {
        size: 'small',
      },
    },
  ],
})
export class CdsTableDirective {}
