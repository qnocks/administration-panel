import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    AuthLayoutRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule {
}
