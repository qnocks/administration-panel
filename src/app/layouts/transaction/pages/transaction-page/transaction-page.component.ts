import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'psap-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionPageComponent implements OnInit {
  transactionForm: FormGroup;
  transaction: Transaction;

  ngOnInit(): void {
    this.transactionForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      externalId: new FormControl('', [Validators.required]),
      provider: new FormControl('', [Validators.required])
    });
  }
}
