import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutModule } from '../../auth/pages/auth-layout.module';
import { ErrorLayoutRoutingModule } from './error-layout-routing.module';
import { ErrorLayoutComponent } from './error-layout.component';

@NgModule({
  declarations: [
    ErrorLayoutComponent,
  ],
  imports: [
    CommonModule,
    ErrorLayoutRoutingModule,
    AuthLayoutModule,
  ],
  exports: [
    ErrorLayoutComponent,
  ],
})
export class ErrorLayoutModule {
}
