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

  transactions: Transaction[] = [
    new Transaction(1, 'income', new Date("January 4, 2019"), 10000, 'job-SREV', 'income'),
    new Transaction(2, 'expense', new Date("January 2, 2019"), 50.2, 'nice dinner out with friends', 'Fun Money'),
    new Transaction(3, 'expense', new Date("January 3, 2019"), 52.99, 'electricity, water, sewer, etc', 'Utilities'),
    new Transaction(4, 'expense', new Date("January 4, 2019"), 150, 'drugzzzz', 'Fun Money'),
    new Transaction(5, 'expense', new Date("January 5, 2019"), 3.50, 'gum', 'Lifestyle'),
    new Transaction(6, 'expense', new Date("January 6, 2019"), 29.32, 'more drugzzz', 'Health'),
    new Transaction(7, 'expense', new Date("January 7, 2019"), 88.00, 'fancy cheeses', 'Fun Money'),
    new Transaction(8, 'expense', new Date("January 3, 2019"), 705.34, 'rent', 'rent'),
  ]

  incomeOrExpenseArray: string[] = ['income', 'expense'];
  categoryArray: string[] = ["Charity", "Income", "Clothing", "FunMoney", "Groceries", "Health", "Lifestyle", "Housing", "Saving", "Transportation", "Utilities", "Taxes"]
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

  editForm(transaction: Transaction) {
    this.editTransaction = Object.assign({}, transaction);
    this.mode = 'edit';
  }
  goBack(){
    this.editTransaction = new Transaction();
    this.mode = 'index';

  }
  saveEdit(){

    let oldTransaction = this.transactions.find(transaction=>{
      return transaction.id === this.editTransaction.id;
    })
    if (oldTransaction){
      oldTransaction.amount = this.editTransaction.amount;
      oldTransaction.category = this.editTransaction.category;
      oldTransaction.date = this.editTransaction.date;
      oldTransaction.incomeOrExpense = this.editTransaction.incomeOrExpense;
      oldTransaction.source = this.editTransaction.source;
      this.goBack();
    }else{
      // TODO: send user back to edit page with an error. 
    }
  }
}
// todo - change the html form to bananna binding so that the right values will prepopulate.