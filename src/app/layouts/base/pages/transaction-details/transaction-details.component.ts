import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(@Inject(MAT_DIALOG_DATA) private data: Transaction,
              private transactionService: TransactionService,
              public dialogRef: MatDialogRef<TransactionDetailsComponent>) {
    this.transaction = data;
    console.log(this.transaction);
  }

  ngOnInit(): void {
    // this.transactionForm = new FormGroup({
    //   id: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   externalId: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   provider: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   status: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   amount: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   currency: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   commissionAmount: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   commissionCurrency: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   timestamp: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   providerTimestamp: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   additionalData: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // });
  }

  complete() {
    console.log('BEFORE transactionService.complete');
    this.transactionService.complete(this.transaction.externalId, this.transaction.provider).subscribe(res => {
      console.log('IN transactionService.complete');
      this.dialogRef.close(true);
    });
  }

  update() {
    this.transactionService.update(this.transaction).subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
