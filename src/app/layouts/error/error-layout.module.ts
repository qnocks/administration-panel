import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutModule } from '../auth/pages/auth-layout.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ErrorLayoutRoutingModule } from './error-layout-routing.module';

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ErrorLayoutRoutingModule,
    AuthLayoutModule
  ],
  exports: [
    ErrorPageComponent
  ]
})
export class ErrorLayoutModule { }
