import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionLayoutComponent } from './transaction-layout.component';
import { RouterModule } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { TransactionLayoutRoutingModule } from './transaction-layout-routing.module';
import { NavbarModule } from '../../base/pages/navbar/navbar.module';

@NgModule({
  declarations: [
    TransactionLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TransactionLayoutRoutingModule,
    NavbarModule,
  ],
  providers: [
    TransactionService,
  ],
  exports: [
    TransactionLayoutComponent,
  ],
})
export class TransactionLayoutModule {
}
