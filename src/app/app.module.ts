import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from "ngx-mask";

import localePt from '@angular/common/locales/pt';
import {RouterModule} from '@angular/router';
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

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        RouterModule.forRoot([]),
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
        PoWidgetModule
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
