import { Component } from "@angular/core";
import { CdsButtonModule } from "@cds-library";

@Component({
    imports: [CdsButtonModule],
    selector: 'ds-cmp-campaigns-dashboard',
    template: `<h1>Campaigns</h1>
    <button mat-flat-button>Button</button>
    `
})
export class CampaignsDashboard { }