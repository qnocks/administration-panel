import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { TransactionLayoutComponent } from './transaction-layout.component';
import { TransactionDashboardModule } from './transaction-dashboard/transaction-dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: TransactionLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: (): Promise<TransactionDashboardModule> =>
          import('src/app/layouts/transaction/pages/transaction-dashboard/transaction-dashboard.module')
            .then((m) => m.TransactionDashboardModule),
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
