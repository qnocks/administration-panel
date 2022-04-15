import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { Endpoints } from '../../../core/constants/endpoints';
import { Constants } from '../../../core/constants/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.tokenStorage.isLoggedIn() && this.isRequiresAuth(request)) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.tokenStorage.getUser().type} ${this.tokenStorage.getUser().accessToken}`,
        },
      });
    }

    return next.handle(request);
  }

  isRequiresAuth(request: HttpRequest<unknown>): boolean {
    return !(request.url.includes(Endpoints.AUTH.BASE) || request.url.includes(Constants.I18N.LOADER_URL_PATH));
  }
}
