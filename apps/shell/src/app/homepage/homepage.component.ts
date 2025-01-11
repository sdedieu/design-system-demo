import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CdsCardModule } from '@cds-library';

@Component({
  imports: [CdsCardModule, RouterLink],
  selector: 'ds-shl-homepage',
  template: `
    <div class="cds-grid cds-grid-cols-2 cds-gap-4">
      @for (card of cards; track card.name) {
      <a [routerLink]="card.route">
        <mat-card appearance="outlined">
          <img mat-card-image [src]="card.img" alt="Photo of a Shiba Inu" />
        </mat-card>
      </a>
      }
    </div>
  `,
})
export class HomePageComponent {
  cards = [
    { img: 'campaign.png', name: 'campaign', route: 'campaign' },
    { img: 'analytics.png', name: 'analytics', route: 'analytics' },
  ];
}
