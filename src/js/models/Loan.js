class Loan {
  constructor(eventID, status, creditor, debtor, date, value, installments, interesRate) {
    this._eventID = eventID;
    this._status = status;
    this._creditor = creditor;
    this._debtor = debtor;
    this._date = date;
    this._value = value;
    this._installments = installments;
    this._interestRate = interesRate;
    this._payments = [];
  }
  _calculeInstallmentValue() {
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
    <article class="card card-data">
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
              <span class="card-data__value">$ ${this._calculeInstallmentValue()}</span>
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