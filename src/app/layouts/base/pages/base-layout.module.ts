import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutRoutingModule } from './base-layout-routing.module';
import { BaseLayoutComponent } from './base-layout.component';
import { AuthLayoutModule } from '../../auth/pages/auth-layout.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    BaseLayoutRoutingModule,
    AuthLayoutModule,
    NavbarModule
  ],
  exports: [
    BaseLayoutComponent
  ]
})
export class BaseLayoutModule {
}
