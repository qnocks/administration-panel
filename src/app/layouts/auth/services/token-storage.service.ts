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
    return this.storageService.getValue(Constants.TOKEN_STORAGE.userKey) !== null;
  }

  setToken(tokenResponse: TokenResponse): void {
    this.storageService.setValue(Constants.TOKEN_STORAGE.userKey, JSON.stringify(tokenResponse));
    this.tokenType = tokenResponse.type;
  }

  getUser(): TokenResponse {
    const user = this.storageService.getValue(Constants.TOKEN_STORAGE.userKey) || '{}';
    return JSON.parse(user);
  }

  removeToken(): void {
    this.storageService.removeValue(Constants.TOKEN_STORAGE.userKey);
  }
}
