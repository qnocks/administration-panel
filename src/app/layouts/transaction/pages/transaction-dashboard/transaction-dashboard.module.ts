import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionDashboardComponent } from './transaction-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TransactionDashboardComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: TransactionDashboardComponent }]),
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    TransactionDashboardComponent,
  ],
})
export class TransactionDashboardModule {
}
