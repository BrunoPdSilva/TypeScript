// classes
export class Payment {
    /* É a mesma coisa que o de cima, mas uma versão mais curta. */
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
