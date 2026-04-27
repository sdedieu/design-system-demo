import { Component } from '@angular/core';

import { UserSettings } from './user-settings';

@Component({
  imports: [UserSettings],
  selector: 'ds-set-settings-entry',
  template: `<ds-set-user-settings />`,
})
export class RemoteEntryComponent { }
