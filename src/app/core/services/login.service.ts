import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../interfaces/login-request';
import { TokenResponse } from '../interfaces/token-response';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private authStorage: AuthStorageService
  ) { }

  login(request: LoginRequest): TokenResponse {
    // TODO: pass actual API url
    this.http.post<TokenResponse>(``, request).subscribe(tokenResponse => {
      this.authStorage.setToken(tokenResponse.token);
      return tokenResponse;
    },() => {
    });
  }
}
