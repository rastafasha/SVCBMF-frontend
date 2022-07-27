import { Injectable } from '@angular/core';
import { Bancuadrado } from '../models/ads-cuadrado';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BancuadradoService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getBancuadrados() {
    return this.http.get<Bancuadrado>(this.ServerUrl + 'api_bancuadrado/Bancuadrados/');
  }


  getBancuadrado(id: number) {
    return this.http.get<Bancuadrado>(this.ServerUrl + 'api_bancuadrado/Bancuadrado/' + id);
  }


}
