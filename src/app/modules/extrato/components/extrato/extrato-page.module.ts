import {NgModule} from '@angular/core';
import {ExtratoRoutingModule} from "./extrato-routing.module";
import {PoModalModule, PoPageModule, PoTabsModule} from "@po-ui/ng-components";
import {ExtratoListagemComponent} from "./extratro-listagem/extrato-listagem.component";

@NgModule({
    imports: [
        ExtratoRoutingModule,
        PoModalModule,
        PoPageModule,
        PoTabsModule
    ],
    declarations: [ // Declarar componentes para que sejam enxergados.
        ExtratoListagemComponent
    ],
    providers: [],
    exports: [ // Exportar componentes para que outros compoenentes possam utilizar.
        ExtratoListagemComponent
    ],
})
export class ExtratoPageModule {
}
