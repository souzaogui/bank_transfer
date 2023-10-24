import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExtractComponent} from "./modules/extract/extract.component";
import {TransferComponent} from "./modules/transfer/transfer.component";

// Configura-se as rotas do projeto
const routes: Routes = [
  {
    path: '', redirectTo: 'transfers', pathMatch: 'full'
  },
  {
    path: 'extract', component: ExtractComponent
  },
  {
    path: 'transfers', component: TransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
