import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transfer} from "../../models/transference.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {
  private transferenceList: any[];

  private url = "http://localhost:3000/transfers";

  constructor(private httpClient: HttpClient) {
    this.transferenceList = [];
  }

  get transfers() {
    return this.transferenceList;
  }

  // Observable, retorna uma resposta da API em um momento futuro
  allTransfers(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transference: Transfer): Observable<Transfer> {
    TransferenceService.addDateParameter(transference);
    return this.httpClient.post<Transfer>(this.url, transference);
  }

  delete(id: Transfer): Observable<Transfer> {
    let newUrl = this.url + "/" + id;
    return this.httpClient.delete<Transfer>(newUrl);
  }

  private static addDateParameter(transference: any) {
    transference.data = new Date();
  }

  validateFields(arr: Array<any>) {
    return arr.includes(undefined);
  }
}
