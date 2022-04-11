import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionService } from '../../services/transaction.service';
import { Constants } from '../../../../core/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'psap-transaction-dashboard',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent implements OnInit {
  displayedColumns: string[] = Constants.TRANSACTION.TABLE_COLUMNS;
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private transactionService: TransactionService, private router: Router) {
  }

  ngOnInit(): void {
    this.transactionService.getAll().subscribe({
      next: (transactions) => {
        this.dataSource = new MatTableDataSource<Transaction>(transactions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  filterTransaction(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.dataSource.filter = target.value;
  }

  redirectToCreateTransaction(): void {
    // TODO: redirect to create transaction page component when create transaction would be implemented
  }

  redirectToTransaction(transaction: Transaction) {
    // TODO: const
    console.log(transaction);
    this.router.navigate([`/transactions/${transaction.id}`]);
  }
}
