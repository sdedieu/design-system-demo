import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettings } from './user-settings';

@Component({
  imports: [CommonModule, UserSettings],
  selector: 'ds-set-settings-entry',
  template: `<ds-set-user-settings />`,
})
export class RemoteEntryComponent { }
