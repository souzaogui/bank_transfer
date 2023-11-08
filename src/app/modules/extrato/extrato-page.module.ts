import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PoContainerModule, PoFieldModule, PoPageModule, PoTabsModule} from "@po-ui/ng-components";
import {ExtratoRoutingModule} from "./extrato-routing.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ExtratoRoutingModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoTabsModule
    ],
    providers: []
})
export class ExtratoPageModule {
}
