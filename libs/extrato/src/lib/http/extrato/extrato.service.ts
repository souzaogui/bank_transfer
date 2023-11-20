import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ListarTransferencias} from "../../../../schemas/src";
import {Injectable} from "@angular/core";

const apiUrl = 'http://localhost:8090/api/';

@Injectable({providedIn: 'root'})
export class ExtratoService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {
    }

    listAllTrasnfers() {
        return this.httpClient.get<ListarTransferencias[]>(apiUrl + 'transfers/list-all');
    }
}
