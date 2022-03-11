import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login-request';
import { BaseApiService } from '../../../core/services/base-api.service';
import { TokenResponse } from '../models/token-response';
import { Endpoints } from '../../../core/constants/endpoints';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends BaseApiService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  login(request: LoginRequest): Observable<TokenResponse> {
    return super.post<TokenResponse>(Endpoints.LOGIN.login, request);
  }
}
