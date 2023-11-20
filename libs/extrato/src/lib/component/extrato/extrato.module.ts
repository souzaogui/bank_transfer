import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    PoButtonModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    PoLoadingModule,
    PoModalModule,
    PoPageModule,
    PoTabsModule,
    PoTagModule,
    PoWidgetModule
} from '@po-ui/ng-components';
import {GridModule} from '@progress/kendo-angular-grid';
import {ExtratoListarComponent} from "./extrato-listar/extrato-listar.component";
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        PoPageModule,
        PoTabsModule,
        PoWidgetModule,
        PoFieldModule,
        PoButtonModule,
        PoDividerModule,
        PoInfoModule,
        PoTagModule,
        GridModule,
        PoModalModule,
        FormsModule,
        PoLoadingModule,
        MatTableModule
    ],
    declarations: [
        ExtratoListarComponent
    ],
    providers: [],
    exports: [
        ExtratoListarComponent
    ],
})
export class ExtratoModule {
}
