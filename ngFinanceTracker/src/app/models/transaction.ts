export class Transaction {
   
    id: number;
    incomeOrExpense: string;
    date: Date;
    amount: number;
    source: string;
    category: string;
    account: {
            id: number;
            name: string;
            total: number;
        };
    

    constructor( id?: number, incomeOrExpense?: string, date?: Date, amount?: number, source?: string, category?: string){
        this.id = id;
        this.incomeOrExpense = incomeOrExpense;
        this.date = date;
        this.amount = amount;
        this.source = source;
        this.category = category

    }
}
