import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: 'cds-page',
  template: `
    <main class="cds-page">
      <ng-content />    
    </main>
    `,
  styles: `
      main.cds-page {
        padding: var(--spacing-2) var(--spacing-3);
        height: 100vh;
      }
    `
})
export class CdsPageComponent {

}