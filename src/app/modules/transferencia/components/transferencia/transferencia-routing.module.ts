import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransferenciaRegistroComponent} from "./transferencia-registro/transferencia-registro.component";

const routes: Routes = [
    {
        path: '',
        component: TransferenciaRegistroComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransferenciaRoutingModule {
}
