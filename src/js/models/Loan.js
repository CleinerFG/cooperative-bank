const loanStatus = {
  1: "Request",
  2: "Active",
  3: "Finished",
};

export class Loan {
  #id;
  #status;
  #description;
  #debtor;
  #creditor;
  #date;
  #amountDue;
  #value;
  #installments;
  #rate;
  #installmentValue;
  #remainingInstallments;
  #payments;
  constructor(id, description, debtor, creditor, value, installments, rate) {
    this.#id = id;
    this.#status = 1;
    this.#description = description;
    this.#debtor = debtor;
    this.#creditor = creditor;
    this.#date = null;
    this.#amountDue = null;
    this.#value = value;
    this.#installments = installments;
    this.#rate = rate;
    this.#installmentValue = this.calculeInstallmentValue();
    this.#remainingInstallments = null;
    this.#payments = [];
  }

  get id() {
    return this.#id;
  }

  get status() {
    return loanStatus[this.#status];
  }

  get description() {
    return this.#description;
  }

  get debtor() {
    return this.#debtor;
  }

  get creditor() {
    return this.#creditor;
  }

  get date() {
    return this.#date;
  }

  get amountDue() {
    return this.#amountDue;
  }

  get value() {
    return this.#value;
  }

  get installments() {
    return this.#installments;
  }

  get interestRate() {
    return this.#rate;
  }

  get installmentValue() {
    return this.#installmentValue;
  }

  get remainingInstallments() {
    return this.#remainingInstallments;
  }

  get payments() {
    return this.#payments;
  }

  #updateRemaningInstallments() {
    return null;
  }

  #updateAmountDue() {
    return null;
  }

  calculeTotalLoanCost() {
    return this.#installmentValue * this.#installments;
  }

  calculeInstallmentValue() {
    const valueWithoutFees = this.#value / this.#installments;
    const fees = this.#value * (this.#rate / 100);
    return valueWithoutFees + fees;
  }

  addPayment(pay) {
    this.#payments.push(pay);
  }
}
