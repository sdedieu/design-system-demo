import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsDashboard } from './campaigns-dashboard';

@Component({
  imports: [CommonModule, CampaignsDashboard],
  selector: 'ds-cmp-campaigns-entry',
  template: `<ds-cmp-campaigns-dashboard />`,
})
export class RemoteEntryComponent { }
