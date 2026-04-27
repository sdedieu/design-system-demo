import { Component, ViewEncapsulation } from '@angular/core';

import { AnalyticsDashboardComponent } from './analytics.component';

@Component({
  imports: [AnalyticsDashboardComponent],
  selector: 'app-analytics-entry',
  template: `<ds-ana-analytics-dashboard />`,
  styleUrls: ['./entry.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RemoteEntryComponent {}
