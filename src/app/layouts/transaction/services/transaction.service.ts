import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/services/base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionService extends BaseApiService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
}
