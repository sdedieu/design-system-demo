import { CommonModule } from '@angular/common';
import { Component, effect, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CdsPageComponent } from '@cds-library/page';
import { CdsBadgeModule } from '@cds-library/badge';
import { CdsSidenavModule } from '@cds-library/sidenav';
import { CdsListModule } from '@cds-library/list';
import { CdsButtonModule } from '@cds-library/button';
import { CdsIconModule } from '@cds-library/icon';
import { CdsHeaderComponent } from '@cds-library/header';
import { CdsDividerModule } from '@cds-library/divider';

import { filter, map } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  imports: [
    RouterModule,
    CdsSidenavModule,
    CdsListModule,
    CdsButtonModule,
    CdsBadgeModule,
    CdsIconModule,
    CdsHeaderComponent,
    CdsPageComponent,
    CdsDividerModule,
    CommonModule,
  ],
  selector: 'ds-shl-root',
  template: `
    <mat-sidenav-container (backdropClick)="close()">
      <mat-sidenav #sidenav (keydown.escape)="close()" disableClose>
        <button mat-icon-button aria-label="Close menu" class="cds-ml-4 cds-mt-4" (click)="close()">
          <mat-icon>close</mat-icon>
        </button>

        <mat-nav-list>
          @for (section of menu; track section.order) { @if (section.display) {
          <div mat-subheader class="cds-flex cds-items-center cds-gap-4 cds-p1-bold" [class.active]="section.isActive">
            <mat-icon matListItemIcon>{{ section.icon }}</mat-icon>
            <div>{{ section.name | uppercase }}</div>
          </div>
          } @for (page of section.pages; track page.order) {
          <a mat-list-item [routerLink]="page.route" routerLinkActive="active" [activated]="page.isActive">
            <mat-icon matListItemIcon>{{ page.icon ?? 'arrow_right' }}</mat-icon>
            <div matListItemTitle>{{ page.name | titlecase }}</div>
          </a>
          } }
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <cds-header>
          <div start class="cds-flex cds-justify-between cds-items-center cds-gap-2">
            <button (click)="sidenav.open()" mat-icon-button aria-label="Open menu">
              <mat-icon>menu</mat-icon>
            </button>

            <img class="orange-logo" src="https://www.criteo.com/fr/wp-content/themes/criteo2017/img/criteo-logo-orange.svg" alt="Criteo" />
          </div>
          <div end>
            <a href="https://www.criteo.com/fr/talk-to-an-expert/" target="_blank" mat-flat-button> Talk to an expert </a>
          </div>
        </cds-header>
        <cds-page>
          <div class="cds-flex cds-justify-between cds-items-center">
            <h1>Shell</h1>
            <p class="cds-flex cds-items-center">
              27 notifications
              <mat-icon matBadge="1" matBadgeSize="small">notifications_active</mat-icon>
            </p>
          </div>
          <button mat-fab aria-label="Need help ? Chat with us" class="cds-fixed cds-right-8 cds-bottom-6 cds-z-10">
            <mat-icon>chat</mat-icon>
          </button>
          <router-outlet />
        </cds-page>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  urlSegment$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => event.urlAfterRedirects),
    map(url => url.split('/').at(1))
  );

  urlSegment = toSignal(this.urlSegment$);

  menu = [
    {
      order: 1,
      name: '',
      icon: null,
      display: false,
      isActive: false,
      pages: [{ order: 1, icon: 'home', name: 'homepage', route: '', isActive: false }],
    },
    {
      order: 2,
      name: 'manage & mesure',
      icon: 'graphic_eq',
      display: true,
      pages: [
        { order: 1, icon: null, name: 'campaigns', route: 'campaigns', isActive: false },
        { order: 2, icon: null, name: 'analytics', route: 'analytics', isActive: false },
      ],
    },
  ];

  constructor() {
    effect(() => {
      this.menu.forEach(m => {
        m.isActive = !!m.pages.find(m => m.route === this.urlSegment());
        m.pages.forEach(p => (p.isActive = p.route === this.urlSegment()));
      });
    });
  }

  close() {
    this.sidenav.close();
  }
}
