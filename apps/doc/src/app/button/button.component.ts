import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdsButtonModule } from '@cds-library/button';

@Component({
  selector: 'app-button',
  imports: [CommonModule, CdsButtonModule],
  template: `<button mat-button aria-label="Remove campaign">Button</button>`,
})
export class ButtonComponent {}
