import { Injectable } from '@angular/core';
import { Observable ,  of, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const httpOptions = {
  headers: new HttpHeaders({
    // for filtering on http interceptor this custom header is required
    'request-type': 'auth',
  })
};

@Injectable()
export class DashboardService {

  url: String;

  Api_Url = environment.api_url;

  constructor(private http: HttpClient,
              ) {
    this.url = this.Api_Url;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  get() {
    return this.http.get<any>(this.url + '/employees', httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  post(data: Object){

    return this.http.post<any>(this.url + '/employees', data)
    .pipe(
      catchError(this.handleError)
    );
  }
  update(id:string,data: Object){
    return this.http.put<any>(this.url + '/employees/' + id, data)
    .pipe(
      catchError(this.handleError)
    );
  }

  delete(id:string){
    return this.http.delete<any>(this.url + '/employees/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

}
