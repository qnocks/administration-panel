import { NgModule } from '@angular/core';
import { TransactionDetailsComponent } from './transaction-details.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TransactionDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    TransactionDetailsComponent,
  ],
})
export class TransactionDetailsModule {
}
