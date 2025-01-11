import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { appConfig } from '../app.config';

echarts.use([BarChart, GridComponent, TitleComponent, CanvasRenderer, LineChart]);

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntryComponent }];
