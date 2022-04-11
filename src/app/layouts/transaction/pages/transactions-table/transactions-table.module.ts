import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsTableComponent } from './transactions-table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { I18nModule } from '../../../../shared/i18n/i18n.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TransactionsTableComponent,
  ],
    imports: [
        RouterModule.forChild([{path: '', component: TransactionsTableComponent}]),
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        I18nModule,
        MatButtonModule,
    ],
  exports: [
    TransactionsTableComponent,
  ],
})
export class TransactionsTableModule {
}
