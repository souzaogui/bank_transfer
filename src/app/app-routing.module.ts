import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Configura-se as rotas do projeto
const routes: Routes = [
    {
        path: '', redirectTo: '', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
