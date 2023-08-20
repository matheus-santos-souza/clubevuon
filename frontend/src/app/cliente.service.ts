import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  getCliente(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      BASE_API_URL + '/cliente/' + id,
      {
        observe: 'response',
      }
    );
  }

  getTrilha(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      BASE_API_URL + '/trilha/' + id,
      {
        observe: 'response',
      }
    );
  }
}
