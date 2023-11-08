import {Component, OnInit, ViewChild} from '@angular/core';
import {GridComponent} from '@progress/kendo-angular-grid';

@Component({
    selector: 'taco-romaneio-romaneio-listar',
    templateUrl: './romaneio-listar.component.html'
})

export class ExtratoListarComponent implements OnInit {
    @ViewChild(GridComponent, {static: true}) gridComponent!: GridComponent;

    ngOnInit() {
        console.log("ACESSOU LIB EXTRATO")
    }
}
