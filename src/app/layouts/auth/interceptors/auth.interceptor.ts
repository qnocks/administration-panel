import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('AUTH intercept');
    if (this.tokenStorage.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.tokenStorage.tokenType} ${this.tokenStorage.getUser().accessToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
