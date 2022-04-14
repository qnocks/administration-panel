import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/services/base-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { Endpoints } from '../../../core/constants/endpoints';

@Injectable()
export class TransactionService extends BaseApiService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<Transaction[]> {
    return super.get(Endpoints.TRANSACTION.BASE + '?pageSize=10000&trace=true');
  }

  update(transaction: Transaction): Observable<Transaction> {
    console.log('transaction');
    console.log(JSON.stringify(transaction));

    const body = {
      id: transaction.id,
      externalId: transaction.externalId,
      provider: transaction.provider,
      status: transaction.status,
      amount: {
        amount: transaction.amount.amount,
        currency: transaction.amount.currency
      },
      commissionAmount: {
        amount: transaction.commissionAmount.amount,
        currency: transaction.commissionAmount.currency
      },
      user: transaction.user,
      additionalData: transaction.additionalData
    };

    return super.put(Endpoints.TRANSACTION.BASE + '?trace=true', body);
  }

  complete(externalId: string, provider: string): Observable<Transaction> {
    const params = new HttpParams().set('external_id', externalId).set('provider', provider);
    return super.post(Endpoints.TRANSACTION.BASE, null, params);
  }
}
