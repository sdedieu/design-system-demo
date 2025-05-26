import { Route } from '@angular/router';
import { routes } from './data/routes';

export const appRoutes: Route[] = [
  { path: 'home', title: 'Home', loadComponent: async () => (await import('./home/home.component')).HomeComponent },
  ...routes,
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
