import { TransactionServiceService } from './../../services/transaction-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  mode: string = 'index';

  displayedColumns: string[] = ['Income or Expense', 'Date', 'Amount', 'Source', 'Category']

  editTransaction: Transaction = new Transaction;

  transactions: Transaction[] = [];
  
  sortedData: Transaction[];

  incomeOrExpenseArray: string[] = ['income', 'expense'];

  categoryArray: string[] = ["Charity", "Income", "Clothing", "FunMoney", "Groceries", "Health", "Lifestyle", "Housing", "Saving", "Transportation", "Utilities", "Taxes"]

  dataSource = new MatTableDataSource(this.transactions);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private transactionService: TransactionServiceService) { }

  ngOnInit() {
    this.index();
  }

  // Service CRUD functions:
  index() {
    this.transactions = this.transactionService.index();
    this.dataSource = new MatTableDataSource(this.transactions);
    this.sortedData = this.transactions.slice()
    this.mode ="index";
    this.editTransaction = new Transaction();
    
  };

  saveEdit() {

    let oldTransaction = this.transactions.find(transaction => {
      return transaction.id === this.editTransaction.id;
    });
    if (oldTransaction) {
      oldTransaction.amount = this.editTransaction.amount;
      oldTransaction.category = this.editTransaction.category;
      oldTransaction.date = this.editTransaction.date;
      oldTransaction.incomeOrExpense = this.editTransaction.incomeOrExpense;
      oldTransaction.source = this.editTransaction.source;
      this.goBack();
    } else {
      // TODO: send user back to edit page with an error. 
    }
  }

  saveNew() {

    this.transactionService.saveNewTransaction(this.editTransaction);
    this.editTransaction = new Transaction;
    this.mode = 'index';
    this.index();
  }

  deleteTransaction(id: number) {
    let doomedTransaction = this.transactions.findIndex(transaction => {
      return transaction.id === id;
    });
    this.transactions.slice(doomedTransaction, 1);
  }

  // in page mode transitions: 
  editForm(transaction: Transaction) {
    this.editTransaction = Object.assign({}, transaction);
    this.mode = 'edit';
  }
  goBack() {
    this.editTransaction = new Transaction();
    this.mode = 'index';

  }
  addForm() {
    this.mode = 'add'
  }


  // in page sort functions
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
        case 'Date': let aDate: number = a.date.getTime();
          let bDate: number = b.date.getTime();
          return this.compare(aDate, bDate, isAsc);
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
