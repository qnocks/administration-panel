import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/token-response';
import { Constants } from '../../../core/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  tokenType: string;

  constructor() { }

  isLoggedIn(): boolean {
    return this.getValue(Constants.TOKEN_STORAGE.tokenKey) !== null;
  }

  setToken(tokenResponse: TokenResponse): void {
    window.localStorage.setItem(Constants.TOKEN_STORAGE.usernameKey, tokenResponse.username);
    window.localStorage.setItem(Constants.TOKEN_STORAGE.tokenKey, tokenResponse.token);
    this.tokenType = tokenResponse.type;
  }

  getToken(): string {
    return  this.getValue(Constants.TOKEN_STORAGE.tokenKey);
  }

  removeToken(): void {
    window.localStorage.removeItem(Constants.TOKEN_STORAGE.tokenKey);
  }

  getValue(value: string): string {
    const storedValue = window.localStorage.getItem(value);

    // TODO: implement error handling when logic component would be done
    if (storedValue === null) {
      return '';
    }

    return storedValue;
  }
}
