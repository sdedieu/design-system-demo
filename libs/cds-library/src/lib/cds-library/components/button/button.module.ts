import { NgModule } from '@angular/core';
import { CdsButtonDirective } from './button.directive';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CdsButtonDirective],
  exports: [CdsButtonDirective, MatButtonModule],
})
export class CdsButtonModule {}
