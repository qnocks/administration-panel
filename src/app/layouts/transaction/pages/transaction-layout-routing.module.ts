import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { TransactionLayoutComponent } from './transaction-layout.component';
import { TransactionTableModule } from './transaction-table/transaction-table.module';

const routes: Routes = [
  {
    path: '',
    component: TransactionLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: (): Promise<TransactionTableModule> =>
          import('src/app/layouts/transaction/pages/transaction-table/transaction-table.module')
            .then((m) => m.TransactionTableModule),
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
