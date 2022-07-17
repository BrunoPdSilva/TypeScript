// classes
export class Invoice {
    /* É a mesma coisa que o de cima, mas uma versão mais curta. */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
//readonly client: string;
//private details: string;
//public amount: number;
//constructor(c: string, d: string, a: number) {
//  this.client = c;
//  this.details = d;
//  this.amount = a;
//}
