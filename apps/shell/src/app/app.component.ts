import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { CdsPageComponent, CdsHeaderComponent } from '@cds-library';

@Component({
  imports: [RouterModule, MatSidenavModule, MatButtonModule, MatIconModule, CdsHeaderComponent, CdsPageComponent],
  selector: 'ds-shl-root',
  template: `
  <mat-sidenav-container (backdropClick)="close()">
    <mat-sidenav #sidenav (keydown.escape)="close()" disableClose>
      <button mat-icon-button aria-label="Close menu" (click)="close()">
        <mat-icon>close</mat-icon>
      </button>
    </mat-sidenav>

    <mat-sidenav-content>
      <cds-header>
        <div start>
          <button (click)="sidenav.open()" mat-icon-button aria-label="Open menu">
            <mat-icon>menu</mat-icon>
          </button>
          <img class="orange-logo" src="https://www.criteo.com/fr/wp-content/themes/criteo2017/img/criteo-logo-orange.svg" alt="Criteo">
        </div>
        <div end>
          <a href="https://www.criteo.com/fr/talk-to-an-expert/" target="_blank" mat-flat-button>
            Talk to an expert
</a>
        </div>
      </cds-header>
      <cds-page>
        <h1>Shell</h1>
        <router-outlet />
      </cds-page>
    </mat-sidenav-content>
  </mat-sidenav-container>
  
  `,
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  close() {
    this.sidenav.close();
  }
}
