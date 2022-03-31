import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login-request';
import { BaseApiService } from '../../../core/services/base-api.service';
import { TokenResponse } from '../models/token-response';
import { Endpoints } from '../../../core/constants/endpoints';
import { Observable, tap } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { LogoutRequest } from '../models/logout-request';

@Injectable()
export class AuthService extends BaseApiService {

  constructor(protected httpClient: HttpClient,
              private tokenStorage: TokenStorageService) {
    super(httpClient);
  }

  isLoggedIn(): boolean {
    return this.tokenStorage.isLoggedIn();
  }

  login(request: LoginRequest): Observable<TokenResponse> {
    return super.post<TokenResponse>(Endpoints.AUTH.LOGIN, request)
      .pipe(
        tap({
          next: (token) => {
            this.tokenStorage.setToken(token);
          }
        })
      );
  }

  logout(): Observable<void> {
    const logoutRequest: LogoutRequest = { username: this.tokenStorage.getUser().username };
    return super.post<void>(Endpoints.AUTH.LOGOUT, logoutRequest)
      .pipe(
        tap({
          complete: () => {
            this.tokenStorage.removeToken();
          }
        })
      );
  }

  test() {
    return super.get('http://localhost:8081/admin/transactions')
  }
}
