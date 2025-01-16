import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CdsButtonModule } from '@cds-library/button';
import { CdsTabsModule } from '@cds-library/tabs';
import { CdsIconModule } from '@cds-library/icon';
import { CdsChipsModule } from '@cds-library/chips';
import { filter, map } from 'rxjs';

@Component({
  imports: [CdsButtonModule, CdsChipsModule, CdsTabsModule, CdsIconModule, RouterLink, RouterOutlet, TitleCasePipe],
  selector: 'ds-cmp-campaigns-dashboard',
  template: `<h1>Campaigns</h1>
    <button mat-button></button>
    <div class="cds-flex cds-justify-between">
      <nav mat-tab-nav-bar [tabPanel]="tabPanel">
        @for (link of links; track link) {
        <a mat-tab-link [routerLink]="[link]" [active]="lastUrlSegment() === link">
          <span class="cds-flex cds-items-center cds-gap-2">
            <mat-icon>grid_view</mat-icon>
            {{ link | titlecase }}
            <mat-chip-set aria-label="New feature">
              <mat-chip>New</mat-chip>
            </mat-chip-set>
          </span>
        </a>
        }
      </nav>
    </div>
    <mat-tab-nav-panel #tabPanel>
      <section class="cds-px-8">
        <router-outlet />
      </section>
    </mat-tab-nav-panel> `,
})
export class CampaignsDashboard {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  lastUrlSegment$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => event.urlAfterRedirects),
    map(url => url.split('/').pop())
  );

  lastUrlSegment = toSignal(this.lastUrlSegment$);

  links = ['campaigns', 'adsets'];
}
