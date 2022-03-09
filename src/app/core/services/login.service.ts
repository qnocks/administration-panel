import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../interfaces/login-request";
import {TokenResponse} from "../interfaces/token-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<TokenResponse> {
    return this.http.put<TokenResponse>(`${this.apiBaseUrl}/admin/auth/login`, request);
  }
}
