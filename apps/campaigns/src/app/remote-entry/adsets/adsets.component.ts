import { CurrencyPipe } from "@angular/common";
import { Component, viewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";

export interface AdSet {
    adSetName: string,
    campaignName: string,
    targetAudience: string,
    dailyBudget: number,
    platform: string,
    clicks: number,
    impressions: number,
    ctr: number,
}

export const ADSET_DATA = [
    {
        adSetName: "Splash Sale - Women 18-24",
        campaignName: "Summer Splash Sale",
        targetAudience: "Women, 18-24, USA",
        dailyBudget: 500,
        platform: "Facebook",
        clicks: 600,
        impressions: 20000,
        ctr: 3.0,
    },
    {
        adSetName: "Splash Sale - Men 25-34",
        campaignName: "Summer Splash Sale",
        targetAudience: "Men, 25-34, USA",
        dailyBudget: 500,
        platform: "Facebook",
        clicks: 600,
        impressions: 25000,
        ctr: 2.4,
    },
    {
        adSetName: "Clearance - Tech Enthusiasts",
        campaignName: "Winter Clearance",
        targetAudience: "Men and Women, 18-35, Tech Interests",
        dailyBudget: 300,
        platform: "Google Ads",
        clicks: 400,
        impressions: 15000,
        ctr: 2.7,
    },
    {
        adSetName: "Trends Launch - Fashion Lovers",
        campaignName: "Tech Trends Launch",
        targetAudience: "Women, 18-30, Fashion Interests",
        dailyBudget: 700,
        platform: "Instagram",
        clicks: 800,
        impressions: 30000,
        ctr: 2.6,
    },
    {
        adSetName: "Spring Promo - Urban Areas",
        campaignName: "Spring Collection Promo",
        targetAudience: "Urban, 20-40, Interests: Shopping",
        dailyBudget: 1000,
        platform: "TikTok",
        clicks: 900,
        impressions: 35000,
        ctr: 2.6,
    },
    {
        adSetName: "New Arrivals - Students",
        campaignName: "New Arrivals Campaign",
        targetAudience: "Students, 18-25, Online Shoppers",
        dailyBudget: 400,
        platform: "Facebook",
        clicks: 700,
        impressions: 20000,
        ctr: 3.5,
    },
    {
        adSetName: "Black Friday - General Audience",
        campaignName: "Black Friday Bonanza",
        targetAudience: "Men and Women, 18-60, All Interests",
        dailyBudget: 2000,
        platform: "Google Ads",
        clicks: 4000,
        impressions: 200000,
        ctr: 2.0,
    },
    {
        adSetName: "Holiday Sale - Travelers",
        campaignName: "Holiday Sale 2024",
        targetAudience: "Men and Women, 25-45, Travel Enthusiasts",
        dailyBudget: 1000,
        platform: "Instagram",
        clicks: 2000,
        impressions: 100000,
        ctr: 2.0,
    },
    {
        adSetName: "School Promo - Parents",
        campaignName: "Back to School Special",
        targetAudience: "Parents, 30-50, Interests: Education",
        dailyBudget: 300,
        platform: "Facebook",
        clicks: 500,
        impressions: 15000,
        ctr: 3.3,
    },
    {
        adSetName: "Fitness - Gym Members",
        campaignName: "Fitness Frenzy",
        targetAudience: "Men and Women, 20-40, Fitness Enthusiasts",
        dailyBudget: 450,
        platform: "TikTok",
        clicks: 900,
        impressions: 30000,
        ctr: 3.0,
    },
    {
        adSetName: "Luxury Watches - High Income",
        campaignName: "Luxury Watches Promo",
        targetAudience: "Men, 30-50, High Income, Interests: Watches",
        dailyBudget: 1200,
        platform: "Google Ads",
        clicks: 2000,
        impressions: 60000,
        ctr: 3.3,
    },
    {
        adSetName: "Eco-Friendly - Millennials",
        campaignName: "Eco-Friendly Initiative",
        targetAudience: "Men and Women, 25-40, Interests: Sustainability",
        dailyBudget: 600,
        platform: "Instagram",
        clicks: 700,
        impressions: 25000,
        ctr: 2.8,
    },
    {
        adSetName: "Gourmet Food - Urban Foodies",
        campaignName: "Gourmet Food Ads",
        targetAudience: "Urban, 25-45, Interests: Food",
        dailyBudget: 700,
        platform: "Facebook",
        clicks: 900,
        impressions: 28000,
        ctr: 3.2,
    },
    {
        adSetName: "Travel - Adventure Seekers",
        campaignName: "Travel Dreams Campaign",
        targetAudience: "Men and Women, 20-35, Interests: Adventure",
        dailyBudget: 1200,
        platform: "Google Ads",
        clicks: 1500,
        impressions: 50000,
        ctr: 3.0,
    },
    {
        adSetName: "Music Mania - Concert Goers",
        campaignName: "Music Mania",
        targetAudience: "Men and Women, 18-30, Interests: Music",
        dailyBudget: 500,
        platform: "TikTok",
        clicks: 600,
        impressions: 20000,
        ctr: 3.0,
    },
    {
        adSetName: "Cars Showcase - Luxury Buyers",
        campaignName: "Luxury Cars Showcase",
        targetAudience: "Men and Women, 35-60, Interests: Luxury Cars",
        dailyBudget: 1500,
        platform: "Instagram",
        clicks: 1000,
        impressions: 50000,
        ctr: 2.0,
    },
    {
        adSetName: "Healthy Living - Suburban Moms",
        campaignName: "Healthy Living Promo",
        targetAudience: "Women, 30-50, Interests: Healthy Living",
        dailyBudget: 350,
        platform: "Facebook",
        clicks: 400,
        impressions: 12000,
        ctr: 3.3,
    },
    {
        adSetName: "Smart Home - Tech Savvy",
        campaignName: "Smart Home Solutions",
        targetAudience: "Men and Women, 25-45, Interests: Smart Home Tech",
        dailyBudget: 800,
        platform: "Google Ads",
        clicks: 1200,
        impressions: 40000,
        ctr: 3.0,
    },
    {
        adSetName: "Books - Avid Readers",
        campaignName: "Bookworm's Paradise",
        targetAudience: "Men and Women, 18-50, Interests: Books",
        dailyBudget: 300,
        platform: "TikTok",
        clicks: 500,
        impressions: 18000,
        ctr: 2.8,
    },
    {
        adSetName: "Gaming Gear - Gamers",
        campaignName: "Gaming Gear Galore",
        targetAudience: "Men, 18-35, Interests: Gaming",
        dailyBudget: 600,
        platform: "Instagram",
        clicks: 900,
        impressions: 25000,
        ctr: 3.6,
    },
];



@Component({
    imports: [MatTableModule, MatPaginatorModule, CurrencyPipe],
    selector: 'ds-cmp-ad-sets',
    template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

<!-- Name Column -->
<ng-container matColumnDef="adSetName">
<th mat-header-cell *matHeaderCellDef> Name </th>
<td mat-cell *matCellDef="let element"> {{element.adSetName}} </td>
</ng-container>

        <!-- Campaign Name Column -->
        <ng-container matColumnDef="campaignName">
        <th mat-header-cell *matHeaderCellDef> Campaign Name </th>
        <td mat-cell *matCellDef="let element"> {{element.campaignName}} </td>
        </ng-container>

        <!-- Target Audience Column  -->
        <ng-container matColumnDef="targetAudience">
        <th mat-header-cell *matHeaderCellDef> Target Audience </th>
        <td mat-cell *matCellDef="let element"> {{element.targetAudience}} </td>
        </ng-container>

        <!-- End Date Column -->
        <ng-container matColumnDef="endDate">
        <th mat-header-cell *matHeaderCellDef> End Date </th>
        <td mat-cell *matCellDef="let element"> {{element.endDate}} </td>
        </ng-container>

        <!-- Daily Budget Column -->
        <ng-container matColumnDef="dailyBudget">
        <th mat-header-cell *matHeaderCellDef> Daily Budget </th>
        <td mat-cell *matCellDef="let element"> {{element.dailyBudget | currency}} </td>
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
        <ng-container matColumnDef="ctr">
        <th mat-header-cell *matHeaderCellDef> CTR (%) </th>
        <td mat-cell *matCellDef="let element"> {{element.ctr}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  <mat-paginator [pageSizeOptions]="[10, 25, 100]" aria-label="Select page of adsets"></mat-paginator>`,
})
export class AdSets {
    displayedColumns: string[] = ['adSetName', 'campaignName', 'targetAudience', 'dailyBudget', 'platform', 'clicks', 'impressions', 'ctr'];
    dataSource = new MatTableDataSource(ADSET_DATA);

    paginator = viewChild<MatPaginator>(MatPaginator);

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator()!;
    }
}