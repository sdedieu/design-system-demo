import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdsButtonModule } from '@cds-library/button';
import { CdsCardModule } from '@cds-library/card';
import { CdsChipsModule } from '@cds-library/chips';
import { CdsDividerModule } from '@cds-library/divider';
import { CdsIconModule } from '@cds-library/icon';

interface CampaignTypeTag {
  icon: string;
  label: string;
}

interface CampaignTypeCard {
  img: string;
  name: string;
  description: string;
  alt: string;
  tags: CampaignTypeTag[];
}

@Component({
  imports: [CdsCardModule, CdsButtonModule, CdsChipsModule, CdsDividerModule, CdsIconModule],
  selector: 'ds-cmp-create-campaign-dialog',
  template: `
    <section>
      <header class="cds-flex cds-justify-between cds-items-center cds-px-4 cds-py-2">
        <strong>Campaign creation</strong>

        <div class="cds-flex cds-items-center cds-gap-4">
          <span>{{ advertiserName }}</span>
          <button mat-icon-button aria-label="Close campaign creation" (click)="close()">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </header>

      <mat-divider></mat-divider>

      <div class="cds-px-4 cds-py-12">
        <h1 class="cds-text-center cds-mb-12">What type of campaign are you launching?</h1>

        <div class="cds-grid cds-grid-cols-3 cds-gap-4">
          @for (card of cards; track card.name) {
          <mat-card appearance="outlined">
            <img mat-card-image class="cds-m-auto" height="320" width="400" [src]="card.img" [alt]="card.alt" />

            <mat-card-content>
              <strong>{{ card.name }}</strong>
              <p>
                {{ card.description }}
                <a href="" (click)="$event.preventDefault()">Learn more</a>
              </p>

              <mat-chip-set [attr.aria-label]="card.name + ' highlights'">
                @for (tag of card.tags; track tag.label) {
                <mat-chip>
                  <mat-icon matChipAvatar>{{ tag.icon }}</mat-icon>
                  {{ tag.label }}
                </mat-chip>
                }
              </mat-chip-set>
            </mat-card-content>

            <mat-divider></mat-divider>

            <mat-card-actions align="end">
              <button mat-flat-button color="primary" [attr.aria-label]="'Start ' + card.name" (click)="startCampaign()">Start</button>
            </mat-card-actions>
          </mat-card>
          }
        </div>
      </div>
    </section>
  `,
})
export class CreateCampaignDialog {
  private readonly dialog = inject(MatDialog);

  advertiserName = '_ctotest_advertiser005';

  cards: CampaignTypeCard[] = [
    {
      img: 'campaign-go.svg',
      name: 'GO campaign',
      description: 'Maximize performance seamlessly with an automated campaign.',
      alt: 'GO campaign illustration',
      tags: [
        { icon: 'tips_and_updates', label: 'Recommended' },
        { icon: 'auto_awesome', label: 'AI-powered' },
        { icon: 'trending_up', label: 'Enhanced performance' },
        { icon: 'rocket_launch', label: 'Quick launch' },
      ],
    },
    {
      img: 'campaign-custom.svg',
      name: 'Custom campaign',
      description: 'Use our advanced controls to build a campaign from scratch.',
      alt: 'Custom campaign illustration',
      tags: [
        { icon: 'tune', label: 'Manual setup' },
        { icon: 'manage_search', label: 'Custom control' },
        { icon: 'extension', label: 'Highly customizable' },
      ],
    },
    {
      img: 'stepper.svg',
      name: 'Go-entreprise Campaign',
      description: 'Get unified access and measurement across performance and retail media.',
      alt: 'Go-entreprise campaign illustration',
      tags: [
        { icon: 'auto_awesome', label: 'Cross-channel' },
        { icon: 'manage_search', label: 'Custom control' },
        { icon: 'extension', label: 'Highly customizable' },
      ],
    },
  ];

  startCampaign() {
    this.close();
  }

  close() {
    this.dialog.closeAll();
  }
}
