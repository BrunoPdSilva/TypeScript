import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
export class Invoice implements HasFormatter {
  /* É a mesma coisa que o de cima, mas uma versão mais curta. */
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

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
