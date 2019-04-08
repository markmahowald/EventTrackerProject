import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  
  // transactions: Transaction[] = [
  //   new Transaction(1, 'income', new Date("January 4, 2019"), 10000, 'job-SREV', 'Income'),
  //   new Transaction(2, 'expense', new Date("January 2, 2019"), 50.2, 'nice dinner out with friends', 'Fun Money'),
  //   new Transaction(3, 'expense', new Date("January 3, 2019"), 52.99, 'electricity, water, sewer, etc', 'Utilities'),
  //   new Transaction(4, 'expense', new Date("January 4, 2019"), 150, 'drugzzzz', 'Fun Money'),
  //   new Transaction(5, 'expense', new Date("January 5, 2019"), 3.50, 'gum', 'Lifestyle'),
  //   new Transaction(6, 'expense', new Date("January 6, 2019"), 29.32, 'more drugzzz', 'Health'),
  //   new Transaction(7, 'expense', new Date("January 7, 2019"), 88.00, 'fancy cheeses', 'Fun Money'),
  //   new Transaction(8, 'expense', new Date("January 3, 2019"), 705.34, 'rent', 'rent'),
  // ];

  private baseUrl = 'http://localhost:8087';
  private url = this.baseUrl + '/api/transactions';

  // account is hardwired in, because multiple accounts will be implemented in a future sprint. 
 private account = {
  id: 1,
  name: "checking",
  total: 3000


 }
  
  // public index(): Transaction[] {
    //   return [...this.transactions]
    // };

    index() {
      return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handleError)
      )  
}
    
    show(id: number): Observable<any> {
      return this.http.get<any>(this.url +'/'+ id);
    }
    constructor(private http: HttpClient) { }
  
  create(transaction: Transaction) {
    // this.transactions.push(transaction);
    transaction.account = this.account;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    // console.log('httpOptions made.');
    return this.http.post<Transaction>(this.url, transaction, httpOptions)
    .pipe(
       catchError(this.handleError)
     )
  };


  editTransaction(editTransaction: Transaction) {
    let id = editTransaction.id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
      return this.http.put<any>(this.url +'/'+ id, editTransaction, httpOptions);
  
  }
  // saveNewTransaction(newTransaction: Transaction){
  //   this.transactions.push(newTransaction);
  // };
  deleteTransaction(id: number){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
      return this.http.delete<any>(this.url +'/'+ id, httpOptions);
    }




  handleError(error: any){
    console.error('Something Broke');
    return throwError(error  || 'Server Error');
  }
}