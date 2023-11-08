import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/extrato/extrato-page.module').then(m => m.ExtratoPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtratoRoutingModule {
}
