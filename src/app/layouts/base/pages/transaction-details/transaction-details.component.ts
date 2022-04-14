import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Transaction } from '../../models/transaction';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'psap-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsComponent implements OnInit {
  transaction: Transaction;
  transactionForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private transactionService: TransactionService,
              private dialogRef: MatDialogRef<TransactionDetailsComponent>) {
    this.transaction = data.transaction;
  }

  ngOnInit(): void {
    this.buildForm();
    this.initForm();

    // this.transactionForm = this.formBuilder.group({
    //   id: [{value: '', disabled: true}],
    //   externalId: [{value: '', disabled: true}],
    //   provider: [{value: '', disabled: true}],
    //   status: [''],
    //   amount: [''],
    //   currency: [''],
    //   commissionAmount: [''],
    //   commissionCurrency: [''],
    //   user: [''],
    //   timestamp: [{value: '', disabled: true}],
    //   providerTimestamp: [{value: '', disabled: true}],
    //   additionalData: [{value: '', disabled: true}],
    // });
  }

  complete() {
    console.log('BEFORE transactionService.complete');
    this.transactionService.complete(this.transaction.externalId, this.transaction.provider).subscribe(() => {
      console.log('IN transactionService.complete');
      this.dialogRef.close(true);
    });
  }

  update() {
    const updatedTransaction = this.transactionForm.getRawValue()
    console.log(updatedTransaction);
    this.transactionService.update(updatedTransaction).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  private buildForm(): void {
    this.transactionForm = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      externalId: new FormControl({ value: '', disabled: true }),
      provider: new FormControl({ value: '', disabled: true }),
      status: new FormControl(''),
      amount: new FormControl(''),
      currency: new FormControl(''),
      commissionAmount: new FormControl(''),
      commissionCurrency: new FormControl(''),
      user: new FormControl(''),
      timestamp: new FormControl({ value: '', disabled: true }),
      providerTimestamp: new FormControl({ value: '', disabled: true }),
      additionalData: new FormControl(''),
    });
  }

  private initForm(): void {
    this.transactionForm.setValue({
      id: this.transaction.id,
      externalId: this.transaction.externalId,
      provider: this.transaction.provider,
      status: this.transaction.status,
      amount: this.transaction.amount.amount,
      currency: this.transaction.amount.currency,
      commissionAmount: this.transaction.amount.currency,
      commissionCurrency: this.transaction.amount.currency,
      user: this.transaction.amount.currency,
      timestamp: this.transaction.amount.currency,
      providerTimestamp: this.transaction.amount.currency,
      additionalData: this.transaction.amount.currency
    });
  }
}
