import { NgModule } from '@angular/core';
import { TransactionDetailsComponent } from './transaction-details.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TransactionDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    TransactionDetailsComponent,
  ],
})
export class TransactionDetailsModule {
}
