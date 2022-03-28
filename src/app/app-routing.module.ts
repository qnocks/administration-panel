import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutModule } from './layouts/base/pages/base-layout.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<BaseLayoutModule> =>
      import('src/app/layouts/base/pages/base-layout.module').then((m) => m.BaseLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
