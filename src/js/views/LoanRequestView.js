export class LoanRequestView {
  constructor(loanRequest, parentNode) {
    this._loanRequest = loanRequest;
    this._parentNode = parentNode;
  }

  render() {
    const htmlStr = `
    <article id="$request-${this._loanRequest.requestID}" class="card card-data">
          <header class="card-data__header">${this._loanRequest.status}</header>
          <main class="card-data__content">
            <div class="card-data__item">
              <span class="card-data__label">Creditor</span>
              <span class="card-data__value">${this._loanRequest.loan.creditor}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Date</span>
              <span class="card-data__value">${this._loanRequest.date}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Value</span>
              <span class="card-data__value">$ ${this._loanRequest.loan.value}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Installments</span>
              <span class="card-data__value">${this._loanRequest.loan.installments} months</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Installment value</span>
              <span class="card-data__value">$ ${this._loanRequest.loan.calculeInstallmentValue()}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Interest Rate</span>
              <span class="card-data__value">${this._loanRequest.loan.interestRate}% p.m</span>
            </div>
          </main>
          <footer class="card-data__footer">
            <button class="btn card-data__btn">Cancel Request</button>
          </footer>
        </article>
    `;
    this._parentNode.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
