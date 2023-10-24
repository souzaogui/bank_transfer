import {Injectable} from '@angular/core';
import {PoTableColumn} from '@po-ui/ng-components';

@Injectable()
export class ExtractService {
  getColumns(): Array<PoTableColumn> {
    return [
      {property: 'bank'},
      {property: 'agency'},
      {property: 'account'},
      {property: 'document'},
      {property: 'accountCredited'},
      {property: 'value'},
      {property: 'data', type: 'dateTime'},
    ];
  }
}
