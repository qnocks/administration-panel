import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginPageModule } from './login-page/login-page.module';
import { Routing } from '../../../core/constants/routing';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: Routing.AUTH.LOGIN,
        pathMatch: 'full',
      },
      {
        path: Routing.AUTH.LOGIN,
        loadChildren: (): Promise<LoginPageModule> =>
          import('src/app/layouts/auth/pages/login-page/login-page.module').then((m) => m.LoginPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule {
}
