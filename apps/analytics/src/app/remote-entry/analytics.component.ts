import { Component } from '@angular/core';
import { CdsCardModule } from '@cds-library/card';
import { EChartsCoreOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { AGE_DISTRIBUTION_DATA, CAMPAIGN_IMPRESSION_OVER_TIME_DATA, COUNTRY_DISTRIBUTION_DATA, GENDER_DISTRIBUTION_DATA } from '@mock-data';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, GraphicComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

echarts.use([BarChart, PieChart, TooltipComponent, GraphicComponent, LegendComponent, GridComponent, SVGRenderer, LineChart]);

@Component({
  imports: [CdsCardModule, NgxEchartsDirective],
  selector: 'ds-ana-analytics-dashboard',
  template: `<div class="cds-grid cds-grid-cols-2 cds-gap-4">
    @for(option of options; track option) {
    <mat-card appearance="outlined">
      <mat-card-content>
        <div echarts [options]="option" [initOpts]="initOpts" class="echart"></div>
      </mat-card-content>
    </mat-card>
    }
  </div>`,
  providers: [provideEchartsCore({ echarts })],
})
export class AnalyticsDashboardComponent {
  initOpts = { renderer: 'svg' };
  options: EChartsCoreOption[] = [CAMPAIGN_IMPRESSION_OVER_TIME_DATA[0], GENDER_DISTRIBUTION_DATA[0], AGE_DISTRIBUTION_DATA[0], COUNTRY_DISTRIBUTION_DATA[0]];
}
