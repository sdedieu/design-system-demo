import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '', component: RemoteEntryComponent, children: [
      { path: 'campaigns', loadComponent: async () => (await import('./campaigns/campaigns.component')).Campaigns },
      { path: 'adsets', loadComponent: async () => (await import('./adsets/adsets.component')).AdSets },
      { path: '', redirectTo: 'campaigns', pathMatch: 'full' }
    ]
  },
];
