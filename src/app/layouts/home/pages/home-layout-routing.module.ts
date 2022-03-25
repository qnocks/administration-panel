import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';
import { HomePageModule } from './home-page/home-page.module';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { AuthLayoutModule } from '../../auth/pages/auth-layout.module';
import { Routing } from '../../../core/constants/routing';
import { ErrorLayoutModule } from '../../error/error-layout.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: Routing.HOME.baseHome,
    pathMatch: 'full'
  },
  {
    path: Routing.HOME.baseHome,
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: (): Promise<HomePageModule> =>
          import('src/app/layouts/home/pages/home-page/home-page.module').then((m) => m.HomePageModule)
      }
    ]
  },
  {
    path: Routing.AUTH.baseAuth,
    loadChildren: (): Promise<AuthLayoutModule> =>
      import('src/app/layouts/auth/pages/auth-layout.module').then((m) => m.AuthLayoutModule)
  },
  {
    path: 'error',
    loadChildren: (): Promise<ErrorLayoutModule> =>
      import('src/app/layouts/error/error-layout.module').then((m) => m.ErrorLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule {
}
