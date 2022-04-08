import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionService } from '../../services/transaction.service';
import { Constants } from '../../../../core/constants/constants';

@Component({
  selector: 'psap-transaction-dashboard',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionTableComponent implements OnInit {
  displayedColumns: string[] = Constants.TRANSACTION.TABLE_COLUMNS;
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private transactionService: TransactionService) {
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

  filterTransaction($event: Event): void {
    const target = $event.target as HTMLInputElement;
    this.dataSource.filter = target.value;
  }
}
