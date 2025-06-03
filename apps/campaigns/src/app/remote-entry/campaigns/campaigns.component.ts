import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, viewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CdsTableModule } from '@cds-library/table';
import { CdsCardModule } from '@cds-library/card';
import { CdsPaginatorModule } from '@cds-library/paginator';
import { CdsButtonModule } from '@cds-library/button';
import { CdsIconModule } from '@cds-library/icon';
import { CAMPAIGN_DATA } from '@mock-data';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  imports: [CdsTableModule, CdsCardModule, CdsPaginatorModule, CdsButtonModule, CdsIconModule, CurrencyPipe],
  selector: 'ds-cmp-campaigns',
  template: `
    <div class="cds-flex cds-justify-end cds-gap-1 cds-mb-4">
      <button mat-flat-button><mat-icon>add</mat-icon> Add Campaign</button>
    </div>
    <mat-card appearance="outlined">
      <mat-card-content>
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
          <!-- Name Column -->
          <ng-container matColumnDef="campaignName">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let element">{{ element.campaignName }}</td>
          </ng-container>

          <!--Start Date Column  -->
          <ng-container matColumnDef="startDate">
            <th mat-header-cell *matHeaderCellDef>Start Date</th>
            <td mat-cell *matCellDef="let element">{{ element.startDate }}</td>
          </ng-container>

          <!-- End Date Column -->
          <ng-container matColumnDef="endDate">
            <th mat-header-cell *matHeaderCellDef>End Date</th>
            <td mat-cell *matCellDef="let element">{{ element.endDate }}</td>
          </ng-container>

          <!-- Budget Column -->
          <ng-container matColumnDef="budget">
            <th mat-header-cell *matHeaderCellDef>Budget</th>
            <td mat-cell *matCellDef="let element">{{ element.budget | currency }}</td>
          </ng-container>

          <!-- Platform Column -->
          <ng-container matColumnDef="platform">
            <th mat-header-cell *matHeaderCellDef>Platform</th>
            <td mat-cell *matCellDef="let element">{{ element.platform }}</td>
          </ng-container>

          <!-- Clicks Column -->
          <ng-container matColumnDef="clicks">
            <th mat-header-cell *matHeaderCellDef>Clicks</th>
            <td mat-cell *matCellDef="let element">{{ element.clicks }}</td>
          </ng-container>

          <!-- Impressions Column -->
          <ng-container matColumnDef="impressions">
            <th mat-header-cell *matHeaderCellDef>Impressions</th>
            <td mat-cell *matCellDef="let element">{{ element.impressions }}</td>
          </ng-container>

          <!-- ConversionRate Column -->
          <ng-container matColumnDef="conversionRate">
            <th mat-header-cell *matHeaderCellDef>Conversion Rate</th>
            <td mat-cell *matCellDef="let element">{{ element.conversionRate }}</td>
          </ng-container>

          <!-- Action Column -->
          <ng-container matColumnDef="action">
            <th mat-header-cell *matHeaderCellDef></th>
            <td mat-cell *matCellDef="let element">
              <button mat-icon-button aria-label="Remove campaign">
                <mat-icon>delete</mat-icon>
              </button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
        <mat-paginator [pageSizeOptions]="[10, 25, 100]" aria-label="Select page of campaigns"></mat-paginator>
      </mat-card-content>
    </mat-card>
  `,
})
export class Campaigns implements AfterViewInit {
  displayedColumns: string[] = ['campaignName', 'startDate', 'endDate', 'budget', 'platform', 'clicks', 'impressions', 'conversionRate', 'action'];
  dataSource = new MatTableDataSource(CAMPAIGN_DATA);

  paginator = viewChild<MatPaginator>(MatPaginator);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator()!;
  }
}
