import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PoBreadcrumb} from '@po-ui/ng-components';

@Component({
    selector: 'app-transferencia-registro',
    templateUrl: './transferencia-registro.component.html',
})
export class TransferenciaRegistroComponent implements OnInit {
    public breadcrumb!: PoBreadcrumb;

    constructor(
        public activatedRoute: ActivatedRoute,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.configureBreadcrumb();
    }

    private configureBreadcrumb() {
        this.breadcrumb = {
            items: [
                {label: 'Extrato', link: '/extrato'}
            ]
        }
    }
}
