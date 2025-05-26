import { Component, computed, signal } from '@angular/core';
import { CdsCardModule } from '@cds-library/card';
import { routes as ROUTES } from '../data/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CdsCardModule, RouterLink],
  template: `
    <div class="cds-grid cds-grid-cols-6 cds-gap-4">
      @for(card of cards(); track card.title) {
      <mat-card appearance="outlined" [routerLink]="'/' + card.path">
        <mat-card-content>{{ card.title }}</mat-card-content>
      </mat-card>
      }
    </div>
  `,
})
export class HomeComponent {
  routes = signal(ROUTES);
  cards = computed(() => this.routes());
}
