import { CurrencyPipe } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CdsTableModule } from '@cds-library/table';
import { CdsCardModule } from '@cds-library/card';
import { CdsPaginatorModule } from '@cds-library/paginator';
import { CdsButtonModule } from '@cds-library/button';
import { CdsIconModule } from '@cds-library/icon';
import { ADSET_DATA } from '@mock-data';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  imports: [CdsTableModule, CdsButtonModule, CdsIconModule, CdsCardModule, CdsPaginatorModule, CurrencyPipe],
  selector: 'ds-cmp-ad-sets',
  template: `
    <div class="cds-flex cds-justify-end cds-gap-1 cds-mb-4">
      <button extended mat-fab><mat-icon>add</mat-icon> Add Adset</button>
    </div>
    <mat-card appearance="outlined">
      <mat-card-content>
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
          <!-- Name Column -->
          <ng-container matColumnDef="adSetName">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let element">{{ element.adSetName }}</td>
          </ng-container>

          <!-- Campaign Name Column -->
          <ng-container matColumnDef="campaignName">
            <th mat-header-cell *matHeaderCellDef>Campaign Name</th>
            <td mat-cell *matCellDef="let element">{{ element.campaignName }}</td>
          </ng-container>

          <!-- Target Audience Column  -->
          <ng-container matColumnDef="targetAudience">
            <th mat-header-cell *matHeaderCellDef>Target Audience</th>
            <td mat-cell *matCellDef="let element">{{ element.targetAudience }}</td>
          </ng-container>

          <!-- End Date Column -->
          <ng-container matColumnDef="endDate">
            <th mat-header-cell *matHeaderCellDef>End Date</th>
            <td mat-cell *matCellDef="let element">{{ element.endDate }}</td>
          </ng-container>

          <!-- Daily Budget Column -->
          <ng-container matColumnDef="dailyBudget">
            <th mat-header-cell *matHeaderCellDef>Daily Budget</th>
            <td mat-cell *matCellDef="let element">{{ element.dailyBudget | currency }}</td>
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
          <ng-container matColumnDef="ctr">
            <th mat-header-cell *matHeaderCellDef>CTR (%)</th>
            <td mat-cell *matCellDef="let element">{{ element.ctr }}</td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
        <mat-paginator [pageSizeOptions]="[10, 25, 100]" aria-label="Select page of adsets"></mat-paginator>
      </mat-card-content>
    </mat-card>
  `,
})
export class AdSets {
  displayedColumns: string[] = ['adSetName', 'campaignName', 'targetAudience', 'dailyBudget', 'platform', 'clicks', 'impressions', 'ctr'];
  dataSource = new MatTableDataSource(ADSET_DATA);

  paginator = viewChild<MatPaginator>(MatPaginator);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator()!;
  }
}
