import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const isRefreshTokenRequest = JSON.stringify(request.body).includes('refreshToken');
    // console.log(`isRefreshTokenRequest = ${isRefreshTokenRequest}`);
    const isAuthRequest = request.url.includes('/auth/');
    // console.log(`isAuthRequest = ${isAuthRequest}`);
    // const isTestRequest = request.url.includes('test');
    // console.log(`isTestRequest = ${isTestRequest}`);

    if (this.tokenStorage.isLoggedIn() && !isAuthRequest) {
      console.log("JWT APPLIED");
      request = request.clone({
        setHeaders: {
          Authorization: `${this.tokenStorage.tokenType} ${this.tokenStorage.getUser().accessToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
