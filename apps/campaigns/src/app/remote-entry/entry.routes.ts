import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SAT_APP_ENTRY_COMPONENT_NAME, WebComponentOverlayContainer } from './root-overlay.service';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    providers: [
      {
        provide: SAT_APP_ENTRY_COMPONENT_NAME,
        useValue: 'ds-cmp-campaigns-entry',
      },
      {
        provide: OverlayContainer,
        useClass: WebComponentOverlayContainer,
      },
    ],
    children: [
      { path: 'campaigns', loadComponent: async () => (await import('./campaigns/campaigns.component')).Campaigns },
      { path: 'adsets', loadComponent: async () => (await import('./adsets/adsets.component')).AdSets },
      { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
    ],
  },
];
