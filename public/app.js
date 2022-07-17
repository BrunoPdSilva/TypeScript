import { Invoice } from "./classes/invoice.js";
const me = {
    name: "Bruno",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
const invOne = new Invoice("Bruno", "Livros", 200);
const invTwo = new Invoice("Selma", "Shopee", 270);
//Array que só recebe dados do tipo(class) Invoice
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
//console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
