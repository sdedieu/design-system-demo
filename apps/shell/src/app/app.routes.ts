import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'settings',
    loadChildren: () => import('settings/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'campaigns',
    loadChildren: () => import('campaigns/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'campaigns',
    pathMatch: 'full'
  },
];
