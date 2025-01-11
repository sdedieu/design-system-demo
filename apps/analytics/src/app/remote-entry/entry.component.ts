import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsDashboardComponent } from './analytics.component';

@Component({
  imports: [CommonModule, AnalyticsDashboardComponent],
  selector: 'app-analytics-entry',
  template: `<ds-ana-analytics-dashboard />`,
  styleUrls: ['./entry.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RemoteEntryComponent {}
