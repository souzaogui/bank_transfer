import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExtratoListagemComponent} from "./extratro-listagem/extrato-listagem.component";

const routes: Routes = [
    {
        path: '',
        component: ExtratoListagemComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtratoRoutingModule {
}
