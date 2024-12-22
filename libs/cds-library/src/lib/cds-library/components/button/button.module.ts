import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { CdsButtonDirective } from "./button.directive";

@NgModule({
    imports: [CdsButtonDirective],
    exports: [MatButtonModule, CdsButtonDirective]
})
export class CdsButtonModule { }