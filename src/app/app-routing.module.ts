import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutModule} from "./layouts/auth/pages/auth-layout.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<AuthLayoutModule> =>
      import('src/app/layouts/auth/pages/auth-layout.module').then((m) => m.AuthLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: "legacy"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
