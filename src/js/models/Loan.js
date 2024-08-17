const loanStatus = {
  1: "Request",
  2: "Active",
  3: "Finished"
}

export class Loan {
  constructor(loanID, description, debtor, creditor, value, installments, interesRate) {
    this._loanID = loanID;
    this._status = 1;
    this._description = description;
    this._debtor = debtor;
    this._creditor = creditor;
    this._date = null;
    this._amountDue = null;
    this._value = value;
    this._installments = installments;
    this._interestRate = interesRate;
    this._installmentValue = this._calculeInstallmentValue();
    this._remainingInstallments = null;
    this._payments = [];
  }

  // Getters
  get loanID() {
    return this._loanID;
  }

  get status() {
    return loanStatus[this._status];
  }

  get description() {
    return this._description;
  }

  get debtor() {
    return this._debtor;
  }

  get creditor() {
    return this._creditor;
  }

  get date() {
    return this._date;
  }

  get amountDue() {
    return this._amountDue;
  }

  get value() {
    return this._value;
  }

  get installments() {
    return this._installments;
  }

  get interestRate() {
    return this._interestRate;
  }

  get installmentValue() {
    return this._installmentValue;
  }

  get remainingInstallments() {
    return this._remainingInstallments;
  }

  get payments() {
    return this._payments;
  }

  get totalLoanCost() {
    return this._installmentValue * this._installments;
  }

  _calculeInstallmentValue() {
    const valueWithoutFees = (this._value / this._installments);
    const fees = this._value * (this._interestRate / 100);
    return valueWithoutFees + fees;
  }

  _updateRemaningInstallments() {
    return null
  }

  _updateAmountDue() {
    return null;
  }

  addPayment(pay) {
    this._payments.push(pay);
  }

  getHtmlStr() {
    return `
    <article id="loan-${this._loanID}" class="card card-data">
      <header class="card-data__header">Loan ID: ${this._loanID}</header>
      <main class="card-data__content">
        <div class="card-data__item">
          <span class="card-data__label">Debtor</span>
          <span class="card-data__value">${this._debtor}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Date</span>
          <span class="card-data__value">${this._date}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Value</span>
          <span class="card-data__value">$ ${this._value}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Description</span>
          <span class="card-data__value">${this._description}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Remaining Installments</span>
          <span class="card-data__value">${this._remainingInstallments}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Installment value</span>
          <span class="card-data__value">$ ${this._intallmentValue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Amount Due</span>
          <span class="card-data__value">$ ${this._amountDue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Interest Rate</span>
          <span class="card-data__value">${this._interestRate}% p.m</span>
        </div>
      </main>
      <footer class="card-data__footer">
        <button class="btn card-data__btn">Payments</button>
      </footer>
    </article>
    `
  }
}
