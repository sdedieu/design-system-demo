import { Component } from "@angular/core";
import { CdsButtonModule } from "@cds-library";

@Component({
    imports: [CdsButtonModule],
    selector: 'ds-cmp-campaigns-dashboard',
    template: `<h1>Campaigns</h1>
    <div class="cds-flex cds-gap-1">
        <button mat-flat-button>Button</button>
        <button cds-size="small" mat-flat-button>Button</button>
    </div>
    `
})
export class CampaignsDashboard {
}