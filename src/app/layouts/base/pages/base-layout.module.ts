import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutRoutingModule } from './base-layout-routing.module';
import { BaseLayoutComponent } from './base-layout.component';
import { AuthLayoutModule } from '../../auth/pages/auth-layout.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarModule } from './navbar/navbar.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    BaseLayoutComponent,
  ],
  imports: [
    CommonModule,
    BaseLayoutRoutingModule,
    AuthLayoutModule,
    LayoutModule,
    NavbarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    BaseLayoutComponent,
  ],
})
export class BaseLayoutModule {
}
