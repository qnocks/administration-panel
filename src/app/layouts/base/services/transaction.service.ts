import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/services/base-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    return super.get(Endpoints.TRANSACTION.BASE + '?pageSize=10000');
  }

  update(transaction: Transaction): Observable<Transaction> {
    return super.put(Endpoints.TRANSACTION.BASE);
  }

  complete(externalId: string, provider: string): Observable<Transaction> {
    const params = new HttpParams().set('external_id', externalId).set('provider', provider);
    return super.post(Endpoints.TRANSACTION.BASE, null, params);
  }
}
