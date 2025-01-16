import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CdsCardModule } from '@cds-library/card';

@Component({
  imports: [CdsCardModule, RouterLink],
  selector: 'ds-shl-homepage',
  template: `
    <div class="cds-grid cds-grid-cols-2 cds-gap-4">
      @for (card of cards; track card.name) {
      <a [routerLink]="card.route" class="cds-place-self-center">
        <mat-card appearance="outlined">
          <img mat-card-image height="400" width="400" [src]="card.img" alt="Photo of a Shiba Inu" />
        </mat-card>
      </a>
      }
    </div>
  `,
})
export class HomePageComponent {
  cards = [
    { img: 'campaigns.svg', name: 'campaigns', route: '/campaigns', alt: 'ad campaigns illustration image' },
    { img: 'analytics.svg', name: 'analytics', route: '/analytics', alt: 'analytics illustration image' },
  ];
}
