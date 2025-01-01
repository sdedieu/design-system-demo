import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsDashboard } from './campaigns-dashboard';

@Component({
  imports: [CommonModule, CampaignsDashboard],
  selector: 'ds-cmp-campaigns-entry',
  template: `<ds-cmp-campaigns-dashboard />`,
  styleUrls: ['./entry.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RemoteEntryComponent { }
