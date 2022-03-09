import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  constructor() {
  }

  saveToken(token: string): void {
    window.localStorage.setItem('token', token);
  }

  getToken(): string {
    return <string>window.localStorage.getItem('token');
  }
}
