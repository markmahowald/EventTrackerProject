import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  
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