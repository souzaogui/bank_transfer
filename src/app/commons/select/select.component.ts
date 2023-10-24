import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PoSelectOption} from "@po-ui/ng-components";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {
  @Output() bank: EventEmitter<any> = new EventEmitter<any>();

  banks: Array<PoSelectOption> = [];

  ngOnInit() {
    this.findValues();
  }

  sendBankInfo(event: any) {
    this.bank.emit(event);
  }

  options = [
    {
      id: '001',
      name: "Banco do Brasil S.A"
    },
    {
      id: '033',
      name: "Banco Santander (Brasil) S.A"
    },
    {
      id: '104',
      name: "Caixa Econômica Federal"
    },
    {
      id: '237',
      name: "Banco Bradesco S.A"
    },
    {
      id: '341',
      name: "Banco Itaú S.A"
    },
    {
      id: '356',
      name: "Banco Real S.A"
    },
    {
      id: '389',
      name: "Banco Mercantil do Brasil S.A"
    },
    {
      id: '399',
      name: "HSBC Bank Brasil S.A"
    },
    {
      id: '422',
      name: "Banco Safra S.A"
    },
    {
      id: '453',
      name: "Banco Rural S.A"
    },
    {
      id: '633',
      name: "Banco Rendimento S.A"
    },
    {
      id: '652',
      name: "Itaú Unibanco Holding S.A"
    },
    {
      id: '745',
      name: "Banco Citibank S.A"
    }
  ];

  private findValues() {
    this.banks = this.options.map(c => ({value: c.id + ' – ' + c.name, label: c.name}));
  }
}
