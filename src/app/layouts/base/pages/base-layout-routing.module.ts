import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout.component';
import { HomePageModule } from './home-page/home-page.module';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { AuthLayoutModule } from '../../auth/pages/auth-layout.module';
import { Routing } from '../../../core/constants/routing';
import { ErrorLayoutModule } from '../../error/pages/error-layout.module';
import { TransactionTableModule } from './transaction-table/transaction-table.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: Routing.HOME.BASE,
    pathMatch: 'full',
  },
  {
    path: Routing.HOME.BASE,
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: (): Promise<HomePageModule> =>
          import('src/app/layouts/base/pages/home-page/home-page.module').then((m) => m.HomePageModule),
      },
    ],
  },
  {
    path: Routing.AUTH.BASE,
    loadChildren: (): Promise<AuthLayoutModule> =>
      import('src/app/layouts/auth/pages/auth-layout.module').then((m) => m.AuthLayoutModule),
  },
  {
    path: Routing.ERROR,
    loadChildren: (): Promise<ErrorLayoutModule> =>
      import('src/app/layouts/error/pages/error-layout.module').then((m) => m.ErrorLayoutModule),
  },
  {
    path: Routing.TRANSACTION.BASE,
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: (): Promise<TransactionTableModule> =>
          import('src/app/layouts/base/pages/transaction-table/transaction-table.module').then((m) => m.TransactionTableModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: Routing.ERROR,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseLayoutRoutingModule {
}
