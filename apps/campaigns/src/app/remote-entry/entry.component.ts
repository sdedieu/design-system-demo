import { Component, ViewEncapsulation } from '@angular/core';

import { CampaignsDashboard } from './campaigns-dashboard';

@Component({
  imports: [CampaignsDashboard],
  selector: 'ds-cmp-campaigns-entry',
  template: `<ds-cmp-campaigns-dashboard />`,
  styleUrls: ['./entry.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RemoteEntryComponent {}
