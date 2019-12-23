import { Injectable } from '@angular/core';
import { Banhorizontal } from '../models/ads-horizontal';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BanhorizontalService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getBanhorizontals() {
    return this.http.get<Banhorizontal>(this.ServerUrl + 'api_banhorizontal/Banhorizontals/');
  }


  getBanhorizontal(id: number) {
    return this.http.get<Banhorizontal>(this.ServerUrl + 'api_banhorizontal/Banhorizontal/' + id);
  }


}
