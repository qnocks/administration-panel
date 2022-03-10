import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export abstract class BaseApiService {

  protected constructor(protected httpClient: HttpClient) {
  }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(url, {params, headers})
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, body?: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.post<T>(url, body, {params, headers})
      .pipe(catchError(this.handleError));
  }

  handleError(): Observable<any> {
    // TODO: Implement actual error handling after login component's logic is done
    return new Observable();
  }
}
