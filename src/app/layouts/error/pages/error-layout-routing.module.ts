import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorLayoutComponent } from './error-layout.component';
import { ErrorPageModule } from './error-page/error-page.module';

const routes: Routes = [
  {
    path: '',
    component: ErrorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: (): Promise<ErrorPageModule> =>
          import('src/app/layouts/error/pages/error-page/error-page.module').then((m) => m.ErrorPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorLayoutRoutingModule {
}
