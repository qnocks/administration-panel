import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutComponent } from './home-layout.component';
import { AuthLayoutModule } from '../../auth/pages/auth-layout.module';

@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    AuthLayoutModule
  ],
  exports: [
    HomeLayoutComponent
  ]
})
export class HomeLayoutModule {
}
