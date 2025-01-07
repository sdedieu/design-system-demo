import { NgModule } from '@angular/core';
import { CdsTableDirective } from './table.directive';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CdsTableDirective],
  exports: [CdsTableDirective, MatTableModule],
})
export class CdsTableModule {}
