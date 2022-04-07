import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const DATA: Transaction[] = [
  {
    externalId: '1111',
    provider: 'webmoney',
    status: 'INITIAL',
    amount: {
      amount: 14,
      currency: 'USD',
    },
    commissionAmount: {
      amount: 1,
      currency: 'USD',
    },
    user: 'Nikolay',
    additionalData: '',
    id: 'qZzyKpp',
  },
  {
    externalId: '2222',
    provider: 'webmoney',
    status: 'INITIAL',
    amount: {
      amount: 14,
      currency: 'USD',
    },
    commissionAmount: {
      amount: 1,
      currency: 'USD',
    },
    user: 'Nikolay',
    additionalData: '',
    id: 'qZzyKpp',
  },
  {
    externalId: '3333',
    provider: 'webmoney',
    status: 'INITIAL',
    amount: {
      amount: 14,
      currency: 'USD',
    },
    commissionAmount: {
      amount: 1,
      currency: 'USD',
    },
    user: 'Nikolay',
    additionalData: '',
    id: 'qZzyKpp',
  },
  {
    externalId: '4444',
    provider: 'webmoney',
    status: 'INITIAL',
    amount: {
      amount: 14,
      currency: 'USD',
    },
    commissionAmount: {
      amount: 1,
      currency: 'USD',
    },
    user: 'Nikolay',
    additionalData: '',
    id: 'qZzyKpp',
  },
  {
    externalId: '5555',
    provider: 'webmoney',
    status: 'INITIAL',
    amount: {
      amount: 14,
      currency: 'USD',
    },
    commissionAmount: {
      amount: 1,
      currency: 'USD',
    },
    user: 'Nikolay',
    additionalData: '',
    id: 'qZzyKpp',
  },
  {
    externalId: '6666',
    provider: 'webmoney',
    status: 'INITIAL',
    amount: {
      amount: 14,
      currency: 'USD',
    },
    commissionAmount: {
      amount: 1,
      currency: 'USD',
    },
    user: 'Nikolay',
    additionalData: '',
    id: 'qZzyKpp',
  },
  {
    externalId: '7777',
    provider: 'webmoney',
    status: 'INITIAL',
    amount: {
      amount: 14,
      currency: 'USD',
    },
    commissionAmount: {
      amount: 1,
      currency: 'USD',
    },
    user: 'Nikolay',
    additionalData: '',
    id: 'qZzyKpp',
  },
];

@Component({
  selector: 'psap-transaction-dashboard',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css'],
})
export class TransactionTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'externalId', 'provider', 'status', 'amount', 'currency', 'user'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Transaction>(DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterTransaction($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.dataSource.filter = target.value;
  }
}
