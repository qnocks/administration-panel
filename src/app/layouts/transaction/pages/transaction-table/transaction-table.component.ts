import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'psap-transaction-dashboard',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'externalId', 'provider', 'status', 'amount', 'currency', 'user'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private transactionService: TransactionService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.transactionService.getAll().subscribe({
      next: (transactions) => {
        this.dataSource = new MatTableDataSource<Transaction>(transactions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  filterTransaction($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.dataSource.filter = target.value;
  }
}
