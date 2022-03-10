import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  tokenKey = 'token';

  constructor() { }

  setToken(token: string): void {
    window.localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return <string> window.localStorage.getItem(this.tokenKey);
  }
}
