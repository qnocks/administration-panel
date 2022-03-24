import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutModule } from './layouts/home/pages/home-layout.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<HomeLayoutModule> =>
      import('src/app/layouts/home/pages/home-layout.module').then((m) => m.HomeLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
