import { TitleCasePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";
import { CdsButtonModule } from "@cds-library";
import { filter, map } from "rxjs";

@Component({
  imports: [CdsButtonModule, MatTabsModule, RouterLink, RouterOutlet, TitleCasePipe],
  selector: 'ds-cmp-campaigns-dashboard',
  template: `<h1>Campaigns</h1>
    <div class="cds-flex cds-gap-1">
        <button mat-flat-button>Button</button>
        <button cds-size="small" mat-flat-button>Button</button>
    </div>
    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
      @for (link of links; track link) {
        <a mat-tab-link [routerLink]="[link]" [active]="lastUrlSegment() === link"> {{ link | titlecase }} </a>
      }
    </nav>
    <mat-tab-nav-panel #tabPanel>
      <section class="cds-p-8">
        <router-outlet />
      </section>
    </mat-tab-nav-panel>
    `,
})
export class CampaignsDashboard {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  lastUrlSegment$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => event.urlAfterRedirects),
    map(url => url.split('/').pop())
  )

  lastUrlSegment = toSignal(this.lastUrlSegment$)

  links = ['campaigns', 'adsets']
}