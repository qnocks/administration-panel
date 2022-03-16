import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/token-response';
import { Constants } from '../../../core/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  tokenType: string;

  isLoggedIn(): boolean {
    return (window.localStorage.getItem(Constants.TokenStorage.tokenKey) !== null);
  }

  setToken(tokenResponse: TokenResponse): void {
    window.localStorage.setItem(Constants.TokenStorage.usernameKey, tokenResponse.username);
    window.localStorage.setItem(Constants.TokenStorage.tokenKey, tokenResponse.token);
    this.tokenType = tokenResponse.type;
  }

  getToken(): string {
    const token = window.localStorage.getItem(Constants.TokenStorage.usernameKey);

    if (token === null) {
      // TODO: implement error handling when logic component would be done
      return '';
    }

    return token;
  }

  removeToken(): void {
    window.localStorage.removeItem(Constants.TokenStorage.tokenKey);
  }
}
