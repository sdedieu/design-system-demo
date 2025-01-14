import { contentChild, Directive, effect, inject, Signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatChip } from '@angular/material/chips';
import { MatTabLink } from '@angular/material/tabs';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: `mat-tab-link, a[mat-tab-link]`,
  providers: [],
})
export class CdsTabsDirective {
  router = inject(Router);
  tabLink = inject(MatTabLink);
  chip = contentChild(MatChip);

  private navigationEnd = toSignal(this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)));

  updateChipActive = effect(() => {
    this.navigationEnd();
    const chip = this.chip();
    if (chip) {
      chip.highlighted = this.tabLink.active;
    }
  });
}
