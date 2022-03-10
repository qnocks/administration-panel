import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/token-response';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private usernameKey = 'username';
  private tokenKey = 'token';

  constructor() { }

  isLoggedIn(): boolean {
    return (window.localStorage.getItem(this.tokenKey) !== null);
  }

  setToken(tokenResponse: TokenResponse): void {
    window.localStorage.setItem(this.usernameKey, tokenResponse.username);
    window.localStorage.setItem(this.tokenKey, tokenResponse.token);
  }

  getToken(): string {
    return <string> window.localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    window.localStorage.removeItem(this.tokenKey);
  }
}
