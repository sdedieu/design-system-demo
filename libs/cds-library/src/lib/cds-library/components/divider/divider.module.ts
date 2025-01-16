import { NgModule } from '@angular/core';
import { CdsDividerDirective } from './divider.directive';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [CdsDividerDirective],
  exports: [CdsDividerDirective, MatDividerModule],
})
export class CdsDividerModule {}
