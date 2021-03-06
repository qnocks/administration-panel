import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/token-response';
import { Constants } from '../../../core/constants/constants';
import { StorageService } from '../../../core/services/storage.service';
import { RefreshTokenResponse } from '../models/refresh-token-response';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private storageService: StorageService) {
  }

  isLoggedIn(): boolean {
    return this.storageService.getValue(Constants.TOKEN_STORAGE.USER_KEY) !== null;
  }

  setToken(tokenResponse: TokenResponse): void {
    this.storageService.setValue(Constants.TOKEN_STORAGE.USER_KEY, JSON.stringify(tokenResponse));
  }

  getUser(): TokenResponse {
    const user = this.storageService.getValue(Constants.TOKEN_STORAGE.USER_KEY) || '{}';
    return JSON.parse(user);
  }

  removeToken(): void {
    this.storageService.removeValue(Constants.TOKEN_STORAGE.USER_KEY);
  }

  setRefreshedToken(token: RefreshTokenResponse): void {
    const username = this.getUser().username;

    const tokenResponse = {
      username: username,
      accessToken: token.accessToken,
      type: token.type,
      refreshToken: token.refreshToken
    };

    this.storageService.setValue(Constants.TOKEN_STORAGE.USER_KEY, JSON.stringify(tokenResponse));
  }
}
