import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterOutlet],
    selector: 'ds-cmp-app-root',
    template: `<router-outlet />`,
})
export class AppComponent { }
