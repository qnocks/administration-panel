import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    AuthLayoutRoutingModule
  ],
  exports: [
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule {
}
