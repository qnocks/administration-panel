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

  constructor(@Inject(MAT_DIALOG_DATA) private data: { transaction: Transaction },
              private transactionService: TransactionService,
              private dialogRef: MatDialogRef<TransactionDetailsComponent>) {
    this.transaction = data.transaction;
  }

  ngOnInit(): void {
    this.buildForm();
    this.initForm();
  }

  complete(): void {
    this.transactionService.complete(this.transaction.externalId, this.transaction.provider).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  update(): void {
    this.transactionService.update(this.transactionForm.getRawValue()).subscribe(() => {
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
      commissionAmount: this.transaction.commissionAmount.currency,
      commissionCurrency: this.transaction.commissionAmount.currency,
      user: this.transaction.user,
      timestamp: this.transaction.timestamp,
      providerTimestamp: this.transaction.providerTimestamp,
      additionalData: this.transaction.additionalData
    });
  }
}
