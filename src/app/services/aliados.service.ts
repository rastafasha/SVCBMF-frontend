import { Injectable } from '@angular/core';
import { Aliado } from '../models/aliados';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AliadoService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAliados() {
    return this.http.get<Aliado>(this.serverUrl + 'api_aliados/aliados/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedAliados() {
    return this.http.get<Aliado>(this.serverUrl + 'api_aliados/featured_aliados/').pipe(
      catchError(this.handleError)
    );
  }

  getAliado(id: number) {
    return this.http.get<Aliado>(this.serverUrl + 'api_aliados/aliado/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentAliados() {
    return this.http.get<Aliado>(this.serverUrl + 'api_aliados/recent_aliados/').pipe(
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
