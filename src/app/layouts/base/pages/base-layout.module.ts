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
import { SidenavModule } from './sidenav/sidenav.module';
import { TransactionService } from '../services/transaction.service';

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
    SidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    TransactionService,
  ],
  exports: [
    BaseLayoutComponent,
  ],
})
export class BaseLayoutModule {
}
