import { NgModule } from '@angular/core';
import { TransactionDetailsComponent } from './transaction-details.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { I18nModule } from '../../../../shared/i18n/i18n.module';

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
    I18nModule,
  ],
  exports: [
    TransactionDetailsComponent,
  ],
})
export class TransactionDetailsModule {
}
