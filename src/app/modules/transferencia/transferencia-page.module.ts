import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PoContainerModule, PoFieldModule, PoPageModule, PoTabsModule} from "@po-ui/ng-components";
import {TransferenciaRoutingModule} from "./transferencia-routing.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TransferenciaRoutingModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoTabsModule
    ],
    providers: []
})
export class TransferenciaPageModule {
}
