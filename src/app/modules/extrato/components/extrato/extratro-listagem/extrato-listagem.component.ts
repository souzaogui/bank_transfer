import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PoBreadcrumb} from '@po-ui/ng-components';

@Component({
    selector: 'app-extrato-listagem',
    templateUrl: './extrato-listagem.component.html',
})
export class ExtratoListagemComponent implements OnInit {
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
                {label: 'Extrato', link: '/extrato'},
                {label: 'Extrato'}
            ]
        }
    }

    // goToNovoRomaneio() {
    //     this.router.navigate(['novo'], {relativeTo: this.activatedRoute}).then(r => console.log(r));
    // }
}
