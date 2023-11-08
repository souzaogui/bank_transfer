import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import localePt from '@angular/common/locales/pt';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoInfoModule,
    PoMenuModule,
    PoMenuPanelModule,
    PoModalModule,
    PoPageModule,
    PoTableModule,
    PoToolbarModule,
    PoWidgetModule
} from "@po-ui/ng-components";
import {GridModule} from '@progress/kendo-angular-grid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


registerLocaleData(localePt, 'pt');

// Configura-se as rotas do menu
const routes: Routes = [
    {
        path: 'extrato',
        loadChildren: () => import('./modules/extrato/extrato-page.module').then(m => m.ExtratoPageModule)
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
        PoPageModule,
        PoToolbarModule,
        PoMenuModule,
        PoMenuPanelModule,
        PoFieldModule,
        ReactiveFormsModule,
        PoButtonModule,
        PoModalModule,
        PoInfoModule,
        PoContainerModule,
        PoTableModule,
        PoWidgetModule,
        GridModule,
        BrowserAnimationsModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt'
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
