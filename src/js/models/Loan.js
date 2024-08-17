const loanStatus = {
  1: "Request",
  2: "Active",
  3: "Finished"
}

class Loan {
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
    this._intallmentValue = this._calculeInstallmentValue();
    this._remainingInstallments = null;
    this._payments = [];
  }

  _calculeInstallmentValue() {
    return null;
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
