import { Component } from "@angular/core";

@Component({
  selector: 'cds-header',
  template: `
  <header class="cds-header">
    <ng-content select="start" />
    <ng-content />
    <ng-content select="end" />
  </header>
    `,
  styles: `
      header.cds-header {
        display: flex;
        justify-content: space-between;
        padding: var(--spacing-2) var(--spacing-3);
        gap: var(--spacing-1);
        background-color: var(--primary-0);
        box-shadow: var(--elevation-4dp);
      }
    `
})
export class CdsHeaderComponent {

}