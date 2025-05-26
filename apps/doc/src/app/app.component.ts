import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  imports: [RouterModule, TitleCasePipe],
  selector: 'app-root',
  template: `
    <h1>{{ pageTitleDisplay() | titlecase }}</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  pageTitle = toSignal(
    inject(Router).events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(navEnd => navEnd.urlAfterRedirects.split('/').at(1))
    )
  );

  pageTitleDisplay = computed(() => `${this.pageTitle()} Page`);
}
