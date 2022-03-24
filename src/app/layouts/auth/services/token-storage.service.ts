import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/token-response';
import { Constants } from '../../../core/constants/constants';
import { StorageService } from '../../../core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  tokenType: string;

  constructor(private storageService: StorageService) {
  }

  isLoggedIn(): boolean {
    return this.storageService.getValue(Constants.TOKEN_STORAGE.usernameKey) !== null;
  }

  setToken(tokenResponse: TokenResponse): void {
    this.storageService.setValue(Constants.TOKEN_STORAGE.usernameKey, JSON.stringify(tokenResponse));
    this.tokenType = tokenResponse.type;
  }

  getToken(): string {
    const user = this.storageService.getValue(Constants.TOKEN_STORAGE.usernameKey) || '{}';
    return JSON.parse(user).accessToken;
  }

  removeToken(): void {
    this.storageService.removeValue(Constants.TOKEN_STORAGE.usernameKey);
  }
}
