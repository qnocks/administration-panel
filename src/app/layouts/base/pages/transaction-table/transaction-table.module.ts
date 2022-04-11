import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTableComponent } from './transaction-table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { I18nModule } from '../../../../shared/i18n/i18n.module';

@NgModule({
  declarations: [
    TransactionTableComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: TransactionTableComponent }]),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    I18nModule,
  ],
  exports: [
    TransactionTableComponent,
  ],
})
export class TransactionTableModule {
}
