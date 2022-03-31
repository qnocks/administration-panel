import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { Endpoints } from '../../../core/constants/endpoints';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthRequest = request.url.includes(Endpoints.AUTH.BASE);
    if (this.tokenStorage.isLoggedIn() && !isAuthRequest) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.tokenStorage.tokenType} ${this.tokenStorage.getUser().accessToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
