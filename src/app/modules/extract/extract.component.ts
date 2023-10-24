import {Component, OnInit} from '@angular/core';
import {TransferenceService} from "../services/transference.service";
import {Transfer} from "../../models/transference.model";
import {PoBreadcrumb, PoTableColumn} from "@po-ui/ng-components";
import {ExtractService} from "./extract-service";

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  providers: [
    ExtractService
  ]
})

export class ExtractComponent implements OnInit {
  transfers!: any[];
  columns!: Array<PoTableColumn>;
  id!: any;

  constructor(private service: TransferenceService, private transportService: ExtractService) {
  }

  breadcrumb: PoBreadcrumb = {
    items: [{label: 'Extrato'}],
  };

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.service.allTransfers().subscribe((transfers: Transfer[]) => {
      this.transfers = transfers;
    })
  }

  addID($event: any) {
    if ($event.id) {
      return this.id = $event.id;
    }
  }

  removeID() {
    return this.id = '';
  }

  deleteElement(id: any) {
    this.service.delete(id).subscribe({
      next: (result) => {
        console.log(result);
        location.reload();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
