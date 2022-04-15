import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export abstract class BaseApiService {

  protected constructor(protected httpClient: HttpClient) {
  }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(url, { params, headers })
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, body?: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.post<T>(url, body, { params, headers })
      .pipe(catchError(this.handleError));
  }

  put<T>(url: string, body?: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.put<T>(url, body, { params, headers })
      .pipe(catchError(this.handleError));
  }

  handleError(error: unknown): Observable<never> {
    // TODO: Implement actual error handling after login component's logic is done
    console.log(error);
    return throwError(() => error);
  }
}
