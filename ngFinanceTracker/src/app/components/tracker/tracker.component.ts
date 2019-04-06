import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  displayedColumns: string[] = ['Income or Expense', 'Date', 'Amount', 'Source', 'Category']

  transactions: Transaction[] = [
    new Transaction(1, 'income', '2019-1-1', 10000, 'job-SREV', 'income'),
    new Transaction(1, 'expense', '2019-1-2', 50.2, 'nice dinner out with friends', 'Fun Money'),
    new Transaction(1, 'expense', '2019-1-3', 52.99, 'electricity, water, sewer, etc', 'Utilities'),
    new Transaction(1, 'expense', '2019-1-4', 150, 'drugzzzz', 'Fun Money'),
    new Transaction(1, 'expense', '2019-1-5', 3.50, 'gum', 'Lifestyle'),
    new Transaction(1, 'expense', '2019-1-6', 29.32, 'more drugzzz', 'Health'),
    new Transaction(1, 'expense', '2019-1-7', 88.00, 'fancy cheeses', 'Fun Money'),
    new Transaction(1, 'expense', '2019-1-8', 705.34, 'rent', 'rent'),
  ]
  sortedData: Transaction[]
  dataSource = new MatTableDataSource(this.transactions);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.sortedData = this.transactions.slice();

  }
  sortData(sort: Sort) {
    const data = this.transactions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Income or Expense': return this.compare(a.incomeOrExpense, b.incomeOrExpense, isAsc);
        case 'Date': return this.compare(a.date, b.date, isAsc);
        case 'Amount': return this.compare(a.amount, b.amount, isAsc);
        case 'Source': return this.compare(a.source, b.source, isAsc);
        case 'Category': return this.compare(a.category, b.category, isAsc);
        default: return 0;
      }
    });

  }
compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}