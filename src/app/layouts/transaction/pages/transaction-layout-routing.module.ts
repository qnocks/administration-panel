import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { TransactionLayoutComponent } from './transaction-layout.component';
import { TransactionsTableModule } from './transactions-table/transactions-table.module';
import { TransactionPageModule } from './transaction-page/transaction-page.module';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: (): Promise<TransactionsTableModule> =>
          import('src/app/layouts/transaction/pages/transactions-table/transactions-table.module')
            .then((m) => m.TransactionsTableModule),
      },
      {
        path: ':id',
        component: TransactionPageComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionLayoutRoutingModule {
}
