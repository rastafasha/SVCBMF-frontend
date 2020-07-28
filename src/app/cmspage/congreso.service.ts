import { Injectable } from '@angular/core';
import { Congreso } from './congreso';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongresoService {

  serverUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getCongresos() {
    return this.http.get<Congreso>(this.serverUrl + 'api_congreso/adminCongresos/').pipe(
      catchError(this.handleError)
    );
  }

  getCongreso(id: number) {
    return this.http.get<Congreso>(this.serverUrl + 'api_congreso/adminCongreso/' + id).pipe(
      catchError(this.handleError)
    );
  }


  congresoSendForm(formdata: Congreso) {
    return this.http.post<Congreso>(this.serverUrl + 'api_congreso/congreso_simple', formdata, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public postFileImagen(imagenParaSubir: File){

		const formData = new FormData(); 
		formData.append('imagen', imagenParaSubir, imagenParaSubir.name); 
		return this.http.post(this.serverUrl, formData);

	}

  

  uploadImage(image){
    return this.http.post<any>(this.serverUrl + 'api_congreso/upload', image).pipe(
      catchError(this.handleError)
    );
  }

  /*uploadImage(p_image){
    return this.http.post(this.serverUrl + 'media/images/congresoPago/', p_image);
  }*/

  
  createCongreso(congreso) {
    return this.http.post<any>(this.serverUrl + 'api_congreso/createCongreso/', congreso)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateCongreso(congreso, id: number) {
    return this.http.post<any>(this.serverUrl + 'api_congreso/updateCongreso/' + id, congreso)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteCongreso(id: number) {
    return this.http.delete(this.serverUrl + 'api_congreso/deleteCongreso/' + id).pipe(
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
