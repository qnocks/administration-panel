import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();
    return this.handle(next, request);
  }

  handle(next: HttpHandler, request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: response => {
          if (response instanceof HttpResponse) {
            this.spinnerService.hide();
          }
        },
        error: err => {
          this.spinnerService.hide();
          throw err;
        }
      })
    );
  }
}
