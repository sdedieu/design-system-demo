import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CdsTabsDirective } from './tabs.directive';

@NgModule({
  imports: [CdsTabsDirective],
  exports: [CdsTabsDirective, MatTabsModule],
})
export class CdsTabsModule {}
