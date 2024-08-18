export class LoanRequestView {
  constructor(loanRequest, parentNode) {
    this._loanRequest = loanRequest;
    this._parentNode = parentNode;
  }

  render() {
    let cssClass = "pending";
    let btntext = "Cancel Request";
    switch (this._loanRequest.status) {
      case "Accepted":
        cssClass = "success";
        btntext = "Confirm";
        break;
      case "Denied":
        cssClass = "fail"
        btntext = "Confirm";
    }

    const htmlStr = `
    <article id="$request-${this._loanRequest.requestID}" class="card card-data request__${cssClass}">
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
              <span class="card-data__value">$ ${this._loanRequest.loan.installmentValue}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Interest Rate</span>
              <span class="card-data__value">${this._loanRequest.loan.interestRate}% p.m</span>
            </div>
          </main>
          <footer class="card-data__footer">
            <button class="btn btn-${cssClass} card-data__btn ">${btntext}</button>
          </footer>
        </article>
    `;
    this._parentNode.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
