class Loan {
  constructor(loanID, status, description, debtor, creditor, date, value, installments, interesRate) {
    this._loanID = loanID;
    this._status = status;
    this._description = description;
    this._debtor = debtor;
    this._creditor = creditor;
    this._date = date;
    this._value = value;
    this._installments = installments;
    this._interestRate = interesRate;
    this._payments = [];
  }

  calculeInstallmentValue() {
    return null;
  }

  _calculeAmountDue() {
    return null;
  }

  addPayment(pay) {
    this._payments.push(pay);
  }

  getHtmlStr() {
    return `
    <article id="${this._eventID}" class="card card-data">
          <header class="card-data__header">${this._status}</header>
          <main class="card-data__content">
            <div class="card-data__item">
              <span class="card-data__label">Creditor</span>
              <span class="card-data__value">${this._creditor}</span>
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
              <span class="card-data__label">Installments</span>
              <span class="card-data__value">${this._installments} months</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Installment value</span>
              <span class="card-data__value">$ ${this.calculeInstallmentValue()}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Interest Rate</span>
              <span class="card-data__value">${this._interestRate}% p.m</span>
            </div>
          </main>
          <footer class="card-data__footer">
            <button class="btn card-data__btn">Cancel Request</button>
          </footer>
        </article>
    `
  }
}