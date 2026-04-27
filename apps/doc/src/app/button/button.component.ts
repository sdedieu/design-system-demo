import { Component } from '@angular/core';

import { CdsButtonModule } from '@cds-library/button';

@Component({
  selector: 'app-button',
  imports: [CdsButtonModule],
  template: `<button mat-button aria-label="Remove campaign">Button</button>`,
})
export class ButtonComponent {}
