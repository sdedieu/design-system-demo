import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CdsChipDirective } from './chip.directive';

@NgModule({
  imports: [CdsChipDirective],
  exports: [MatChipsModule, CdsChipDirective],
})
export class CdsChipsModule {}
