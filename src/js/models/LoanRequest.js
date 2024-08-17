requestStatus = {
  1: "Pending",
  2: "Accepted",
  3: "Denied",
  4: "Canceled"
}

class LoanRequest {
  constructor(requestID, date) {
    this._requestID = requestID;
    this._date = date;
    this._status = 1;
    this._loan = null;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    if (value in requestStatus) {
      this._status = value
      return true;
    }
    return false;
  }

  newRequest(loan) {
    this._loan = loan;
  }

  cancelRequest() {
    this._status = 4;
  }

  getHtmlStr() {
    return `
    <article id="$request-${this._requestID}" class="card card-data">
          <header class="card-data__header">${this._status}</header>
          <main class="card-data__content">
            <div class="card-data__item">
              <span class="card-data__label">Creditor</span>
              <span class="card-data__value">${this._loan.creditor}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Date</span>
              <span class="card-data__value">${this._date}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Value</span>
              <span class="card-data__value">$ ${this._loan.value}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Installments</span>
              <span class="card-data__value">${this._loan.installments} months</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Installment value</span>
              <span class="card-data__value">$ ${this._loan.calculeInstallmentValue()}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Interest Rate</span>
              <span class="card-data__value">${this._loan.interestRate}% p.m</span>
            </div>
          </main>
          <footer class="card-data__footer">
            <button class="btn card-data__btn">Cancel Request</button>
          </footer>
        </article>
    `;
  }
}
