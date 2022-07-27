import { Injectable } from '@angular/core';
import { Ceo } from '../models/ceo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CeoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCeos() {
    return this.http.get<Ceo>(this.serverUrl + 'api_ceo/ceos/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedCeos() {
    return this.http.get<Ceo>(this.serverUrl + 'api_ceo/featured_ceos/').pipe(
      catchError(this.handleError)
    );
  }

  getCeo(id: number) {
    return this.http.get<Ceo>(this.serverUrl + 'api_ceo/ceo/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentCeos() {
    return this.http.get<Ceo>(this.serverUrl + 'api_ceo/recent_ceos/').pipe(
      catchError(this.handleError)
    );
  }

  getCargos() {
    return this.http.get<Ceo>(this.serverUrl + 'api/cargos/').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
