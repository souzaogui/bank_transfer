import {Component, OnInit, ViewChild} from '@angular/core';
import {ExtratoService} from "../../../http";
import {ListarTransferencias} from "../../../../../schemas/src";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
    selector: 'app-extrato-listar',
    templateUrl: './extrato-listar.component.html',
    styleUrls: ['./extrato-listar.component.css']
})

export class ExtratoListarComponent implements OnInit {

    extracts: ListarTransferencias[] = [];
    displayedColumns = ['banco', 'agencia', 'conta', 'tipoConta', 'valor', 'data'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        public extratoSevice: ExtratoService
    ) {
        this.getAllTransfers();
    }

    public ngOnInit(): void {
    }

    getAllTransfers() {
        this.extratoSevice.listAllTrasnfers().subscribe(
            data => {
                console.log("Dados API: ", data);
                this.extracts = data;
            }
        )
    }
}
