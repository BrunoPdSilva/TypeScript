// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("Bruno", "Livros", 200);
const invTwo = new Invoice("Selma", "Shopee", 270);

//Array que só recebe dados do tipo(class) Invoice
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
