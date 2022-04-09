import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/services/base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { Endpoints } from '../../../core/constants/endpoints';

@Injectable()
export class TransactionService extends BaseApiService {

  // TODO: implement more api calls when continue implementing transaction layout
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<Transaction[]> {
    return super.get(Endpoints.TRANSACTION.BASE);
  }
}
