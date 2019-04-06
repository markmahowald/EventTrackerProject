export class Transaction {
   
    id: number;
    incomeOrExpense: string;
    date: string;
    amount: number;
    source: string;
    category: string;

    constructor( id: number, incomeOrExpense: string, date: string, amount: number, source: string, category: string){
        this.id = id;
        this.incomeOrExpense = incomeOrExpense;
        this.date = date;
        this.amount = amount;
        this.source = source;
        this.category = category

    }
}
