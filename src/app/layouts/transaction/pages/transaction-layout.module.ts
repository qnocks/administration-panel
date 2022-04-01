import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionLayoutComponent } from './transaction-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TransactionLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TransactionLayoutComponent,
  ],
})
export class TransactionLayoutModule {
}
