import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthService } from '../services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    AuthLayoutRoutingModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    AuthLayoutComponent
  ]
})
export class AuthLayoutModule {
}
