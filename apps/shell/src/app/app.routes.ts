import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'homepage',
    loadComponent: () => import('./homepage/homepage.component').then(m => m!.HomePageComponent),
  },
  {
    path: 'analytics',
    loadChildren: () => import('analytics/Routes').then(m => m!.remoteRoutes),
  },
  {
    path: 'settings',
    loadChildren: () => import('settings/Routes').then(m => m!.remoteRoutes),
  },
  {
    path: 'campaigns',
    loadChildren: () => import('campaigns/Routes').then(m => m!.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];
