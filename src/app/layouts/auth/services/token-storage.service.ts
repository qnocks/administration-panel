import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/token-response';
import { Constants } from '../../../core/constants/constants';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  tokenType: string;

  constructor(private storageService: StorageService) {
  }

  isLoggedIn(): boolean {
    return this.storageService.getValue(Constants.TOKEN_STORAGE.tokenKey) !== null;
  }

  setToken(tokenResponse: TokenResponse): void {
    this.storageService.setValue(Constants.TOKEN_STORAGE.usernameKey, tokenResponse.username);
    this.storageService.setValue(Constants.TOKEN_STORAGE.tokenKey, tokenResponse.token);
    this.tokenType = tokenResponse.type;
  }

  getToken(): string {
    return this.storageService.getValue(Constants.TOKEN_STORAGE.tokenKey) || '';
  }

  removeToken(): void {
    this.storageService.removeValue(Constants.TOKEN_STORAGE.tokenKey);
  }
}
