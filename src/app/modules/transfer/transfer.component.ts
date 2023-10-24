import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {TransferenceService} from "../services/transference.service";
import {Transfer} from "../../models/transference.model";
import {Router} from "@angular/router";
import {cnpj, cpf} from "cpf-cnpj-validator";
import {PoBreadcrumb, PoCheckboxGroupOption, PoModalComponent} from "@po-ui/ng-components";
import {formatCPForCNPJ} from 'js-format-cpf-cnpj';

@Component({
    selector: 'app-transfer',
    templateUrl: './transfer.component.html',
    styleUrls: ['./transfer.component.scss']
})

export class TransferComponent {

    @ViewChild('userDetailModal') userDetailModal!: PoModalComponent;

    @Output() transfer = new EventEmitter<any>();

    id: any;
    bank: any;
    agency: any;
    account: any;
    document: any;
    accountCredited: any;
    value: any;
    santanderBank = "033 – Banco Santander (Brasil) S.A";

    breadcrumb: PoBreadcrumb = {
        items: [{label: 'Transferências'}],
    };

    public readonly auditOptions: Array<PoCheckboxGroupOption> = [
        {value: 'Corrente', label: 'Corrente'},
        {value: 'Creditada', label: 'Creditada'},
        {value: 'Poupança', label: 'Poupança'}
    ];

    constructor(private service: TransferenceService, private router: Router) {
    }

    receiveBankInfo(bank: any) {
        this.bank = bank;
    }

    isValidBank() {
        var value = this.bank;
        return value != undefined;
    }

    isValidAgency() {
        if (this.agency == undefined || this.agency.length == 0) {
            return true;
        }
        return !isNaN(this.agency) && this.agency.length == 4;
    }

    isValidAccount() {
        let ac = this.account;
        if (ac == undefined || ac.length == 0) {
            return true;
        }
        this.account = TransferComponent.addMask(ac, this.bank, this.santanderBank);
        return ((this.account.length === 6 || this.account.length === 7) && !(this.bank === this.santanderBank)) ||
            this.account.length === 11 && this.bank === this.santanderBank;
    }

    setInputMaxLength() {
        return this.bank === this.santanderBank ? 11 : 7;
    }

    private static addMask(ac: string, bank: any, compare: string) {
        let account = ac.replace(/\D/g, "");
        return bank === compare ? account.replace(/(\d{9,10})(\d{1})$/, "$1-$2") :
            account.replace(/(\d{4,5})(\d{1})$/, "$1-$2");
    }

    isValidDocument() {
        let doc = this.document;
        if (doc) {
            return true;
        } else if (doc.size > 11) {
            return cnpj.isValid(doc);
        }
        return cpf.isValid(doc);
    }

    isCorrectFields() {
        let arr: Array<any> = [];
        arr.push(this.bank);
        arr.push(this.agency);
        arr.push(this.account);
        arr.push(this.document);
        arr.push(this.accountCredited);
        arr.push(this.value);
        return this.service.validateFields(arr);
    }

    send() {
        const values: Transfer = {
            bank: this.bank,
            agency: this.agency,
            account: this.account,
            document: this.document ? formatCPForCNPJ(this.document) : "",
            accountCredited: this.accountCredited,
            value: this.value ? this.value.toLocaleString('pt-br', {minimumFractionDigits: 2}) : "",
            id: TransferComponent.encode(Math.floor(Date.now() * Math.random()).toString(36))
        };

        const join: string[] = [];
        let arr = Object.keys(values);
        arr.forEach((value) => {
            // @ts-ignore
            join.push(`${values[value]}`);
        })

        const found = join.find(element => element === "undefined");
        if (found) {
            return alert('Preencher todos os campos, antes de enviar.');
        } else {
            console.log("Solicitação de transferência.");
            this.service.add(values).subscribe({
                next: (result) => {
                    console.log(result);
                    this.clearFields();
                    this.userDetailModal.open();
                    // this.router.navigateByUrl('extract');
                },
                error: (error) => {
                    console.error(error);
                }
            });
        }
    }

    isCpfOrCnpj() {
        if (!this.document) {
            return "";
        }
        return this.document.length < 11 ? "999.999.999-99" : "99.999.999/9999-99";
    }

    clearFields() {
        this.id = "";
        this.bank = "";
        this.agency = "";
        this.account = "";
        this.document = "";
        this.accountCredited = "";
        this.value = "";
    }

    private static encode(str: string) {
        return btoa(str);
    }

    // private decode(str) {
    //   return atob(str);
    // }
}
