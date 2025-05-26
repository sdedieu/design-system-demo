import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'badge', title: 'Badge', loadComponent: async () => (await import('../badge/badge.component')).BadgeComponent },
  { path: 'button', title: 'Button', loadComponent: async () => (await import('../button/button.component')).ButtonComponent },
  { path: 'card', title: 'Card', loadComponent: async () => (await import('../card/card.component')).CardComponent },
  { path: 'chips', title: 'Chips', loadComponent: async () => (await import('../chips/chips.component')).ChipsComponent },
  { path: 'divider', title: 'Divider', loadComponent: async () => (await import('../divider/divider.component')).DividerComponent },
  { path: 'form-field', title: 'Form field', loadComponent: async () => (await import('../form-field/form-field.component')).FormFieldComponent },
  { path: 'headeer', title: 'Header', loadComponent: async () => (await import('../header/header.component')).HeaderComponent },
  { path: 'icon', title: 'Icon', loadComponent: async () => (await import('../icon/icon.component')).IconComponent },
  { path: 'list', title: 'List', loadComponent: async () => (await import('../list/list.component')).ListComponent },
  { path: 'page', title: 'Page', loadComponent: async () => (await import('../page/page.component')).PageComponent },
  { path: 'paginator', title: 'Paginator', loadComponent: async () => (await import('../paginator/paginator.component')).PaginatorComponent },
  { path: 'select', title: 'Select', loadComponent: async () => (await import('../select/select.component')).SelectComponent },
  { path: 'sidenav', title: 'Sidenav', loadComponent: async () => (await import('../sidenav/sidenav.component')).SidenavComponent },
  { path: 'table', title: 'Table', loadComponent: async () => (await import('../table/table.component')).TableComponent },
  { path: 'tabs', title: 'Tabs', loadComponent: async () => (await import('../tabs/tabs.component')).TabsComponent },
];
