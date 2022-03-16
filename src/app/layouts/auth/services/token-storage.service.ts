import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/token-response';
import { Constants } from '../../../core/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  tokenType: string;

  isLoggedIn(): boolean {
    return (window.localStorage.getItem(Constants.TOKEN_STORAGE.tokenKey) !== null);
  }

  setToken(tokenResponse: TokenResponse): void {
    window.localStorage.setItem(Constants.TOKEN_STORAGE.usernameKey, tokenResponse.username);
    window.localStorage.setItem(Constants.TOKEN_STORAGE.tokenKey, tokenResponse.token);
    this.tokenType = tokenResponse.type;
  }

  getToken(): string {
    const token = window.localStorage.getItem(Constants.TOKEN_STORAGE.usernameKey);

    if (token === null) {
      // TODO: implement error handling when logic component would be done
      return '';
    }

    return token;
  }

  removeToken(): void {
    window.localStorage.removeItem(Constants.TOKEN_STORAGE.tokenKey);
  }
}
