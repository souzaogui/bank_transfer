import {NgModule} from '@angular/core';
import {PoModalModule, PoPageModule, PoTabsModule} from "@po-ui/ng-components";
import {TransferenciaRegistroComponent} from "./transferencia-registro/transferencia-registro.component";
import {TransferenciaRoutingModule} from "./transferencia-routing.module";

@NgModule({
    imports: [
        TransferenciaRoutingModule,
        PoModalModule,
        PoPageModule,
        PoTabsModule
    ],
    declarations: [ // Declarar componentes para que sejam enxergados.
        TransferenciaRegistroComponent
    ],
    providers: [],
    exports: [ // Exportar componentes para que outros compoenentes possam utilizar.
        TransferenciaRegistroComponent
    ],
})
export class TransferenciaPageModule {
}
