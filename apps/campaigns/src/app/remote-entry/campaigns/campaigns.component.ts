import { CurrencyPipe } from "@angular/common";
import { AfterViewInit, Component, viewChild, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
    campaignName: string,
    startDate: string,
    endDate: string,
    budget: number,
    platform: string,
    clicks: number,
    impressions: number,
    conversionRate: number,
}

const CAMPAIGN_DATA: PeriodicElement[] = [
    {
        campaignName: "Summer Splash Sale",
        startDate: "2024-01-01",
        endDate: "2024-01-15",
        budget: 5000,
        platform: "Facebook",
        clicks: 1200,
        impressions: 45000,
        conversionRate: 3.5,
    },
    {
        campaignName: "Winter Clearance",
        startDate: "2024-01-05",
        endDate: "2024-01-20",
        budget: 4000,
        platform: "Google Ads",
        clicks: 950,
        impressions: 38000,
        conversionRate: 4.0,
    },
    {
        campaignName: "Tech Trends Launch",
        startDate: "2024-02-01",
        endDate: "2024-02-10",
        budget: 6500,
        platform: "Instagram",
        clicks: 1500,
        impressions: 55000,
        conversionRate: 2.7,
    },
    {
        campaignName: "Spring Collection Promo",
        startDate: "2024-03-01",
        endDate: "2024-03-31",
        budget: 8000,
        platform: "TikTok",
        clicks: 2300,
        impressions: 80000,
        conversionRate: 2.8,
    },
    {
        campaignName: "New Arrivals Campaign",
        startDate: "2024-02-15",
        endDate: "2024-03-01",
        budget: 7000,
        platform: "Facebook",
        clicks: 1700,
        impressions: 62000,
        conversionRate: 3.2,
    },
    {
        campaignName: "Black Friday Bonanza",
        startDate: "2024-11-20",
        endDate: "2024-11-30",
        budget: 15000,
        platform: "Google Ads",
        clicks: 5200,
        impressions: 250000,
        conversionRate: 2.1,
    },
    {
        campaignName: "Holiday Sale 2024",
        startDate: "2024-12-01",
        endDate: "2024-12-24",
        budget: 20000,
        platform: "Instagram",
        clicks: 6000,
        impressions: 320000,
        conversionRate: 1.8,
    },
    {
        campaignName: "Back to School Special",
        startDate: "2024-08-01",
        endDate: "2024-08-15",
        budget: 5000,
        platform: "Facebook",
        clicks: 1100,
        impressions: 46000,
        conversionRate: 3.1,
    },
    {
        campaignName: "Fitness Frenzy",
        startDate: "2024-01-10",
        endDate: "2024-01-31",
        budget: 4500,
        platform: "TikTok",
        clicks: 1800,
        impressions: 75000,
        conversionRate: 2.4,
    },
    {
        campaignName: "Luxury Watches Promo",
        startDate: "2024-05-01",
        endDate: "2024-05-31",
        budget: 12000,
        platform: "Google Ads",
        clicks: 4000,
        impressions: 140000,
        conversionRate: 2.9,
    },
    {
        campaignName: "Eco-Friendly Initiative",
        startDate: "2024-06-15",
        endDate: "2024-07-15",
        budget: 7500,
        platform: "Instagram",
        clicks: 2000,
        impressions: 90000,
        conversionRate: 2.2,
    },
    {
        campaignName: "Gourmet Food Ads",
        startDate: "2024-09-01",
        endDate: "2024-09-30",
        budget: 9000,
        platform: "Facebook",
        clicks: 2400,
        impressions: 98000,
        conversionRate: 2.4,
    },
    {
        campaignName: "Travel Dreams Campaign",
        startDate: "2024-07-01",
        endDate: "2024-07-31",
        budget: 10000,
        platform: "Google Ads",
        clicks: 3000,
        impressions: 150000,
        conversionRate: 2.0,
    },
    {
        campaignName: "Music Mania",
        startDate: "2024-04-01",
        endDate: "2024-04-15",
        budget: 6000,
        platform: "TikTok",
        clicks: 1700,
        impressions: 70000,
        conversionRate: 2.5,
    },
    {
        campaignName: "Luxury Cars Showcase",
        startDate: "2024-05-10",
        endDate: "2024-05-20",
        budget: 20000,
        platform: "Instagram",
        clicks: 5500,
        impressions: 250000,
        conversionRate: 2.2,
    },
    {
        campaignName: "Healthy Living Promo",
        startDate: "2024-03-15",
        endDate: "2024-03-31",
        budget: 4000,
        platform: "Facebook",
        clicks: 900,
        impressions: 40000,
        conversionRate: 3.0,
    },
    {
        campaignName: "Smart Home Solutions",
        startDate: "2024-06-01",
        endDate: "2024-06-30",
        budget: 10000,
        platform: "Google Ads",
        clicks: 2800,
        impressions: 120000,
        conversionRate: 2.3,
    },
    {
        campaignName: "Bookworm's Paradise",
        startDate: "2024-09-15",
        endDate: "2024-09-30",
        budget: 3000,
        platform: "TikTok",
        clicks: 1500,
        impressions: 60000,
        conversionRate: 2.5,
    },
    {
        campaignName: "Gaming Gear Galore",
        startDate: "2024-08-15",
        endDate: "2024-08-30",
        budget: 8000,
        platform: "Instagram",
        clicks: 3200,
        impressions: 110000,
        conversionRate: 2.9,
    },
    {
        campaignName: "Pet Supplies Promo",
        startDate: "2024-02-20",
        endDate: "2024-03-05",
        budget: 4500,
        platform: "Facebook",
        clicks: 1400,
        impressions: 54000,
        conversionRate: 3.4,
    },
];


@Component({
    imports: [MatTableModule, MatPaginatorModule, CurrencyPipe],
    selector: 'ds-cmp-campaigns',
    template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

        <!-- Name Column -->
        <ng-container matColumnDef="campaignName">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.campaignName}} </td>
        </ng-container>

        <!--Start Date Column  -->
        <ng-container matColumnDef="startDate">
        <th mat-header-cell *matHeaderCellDef> Start Date </th>
        <td mat-cell *matCellDef="let element"> {{element.startDate}} </td>
        </ng-container>

        <!-- End Date Column -->
        <ng-container matColumnDef="endDate">
        <th mat-header-cell *matHeaderCellDef> End Date </th>
        <td mat-cell *matCellDef="let element"> {{element.endDate}} </td>
        </ng-container>

        <!-- Budget Column -->
        <ng-container matColumnDef="budget">
        <th mat-header-cell *matHeaderCellDef> Budget </th>
        <td mat-cell *matCellDef="let element"> {{element.budget | currency}} </td>
        </ng-container>

        <!-- Platform Column -->
        <ng-container matColumnDef="platform">
        <th mat-header-cell *matHeaderCellDef> Platform </th>
        <td mat-cell *matCellDef="let element"> {{element.platform}} </td>
        </ng-container>

        <!-- Clicks Column -->
        <ng-container matColumnDef="clicks">
        <th mat-header-cell *matHeaderCellDef> Clicks </th>
        <td mat-cell *matCellDef="let element"> {{element.clicks}} </td>
        </ng-container>

        <!-- Impressions Column -->
        <ng-container matColumnDef="impressions">
        <th mat-header-cell *matHeaderCellDef> Impressions </th>
        <td mat-cell *matCellDef="let element"> {{element.impressions}} </td>
        </ng-container>

        <!-- ConversionRate Column -->
        <ng-container matColumnDef="conversionRate">
        <th mat-header-cell *matHeaderCellDef> Conversion Rate </th>
        <td mat-cell *matCellDef="let element"> {{element.conversionRate}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    <mat-paginator [pageSizeOptions]="[10, 25, 100]" aria-label="Select page of campaigns"></mat-paginator>
    `,
})
export class Campaigns implements AfterViewInit {
    displayedColumns: string[] = ['campaignName', 'startDate', 'endDate', 'budget', 'platform', 'clicks', 'impressions', 'conversionRate'];
    dataSource = new MatTableDataSource(CAMPAIGN_DATA);

    paginator = viewChild<MatPaginator>(MatPaginator);

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator()!;
    }
}