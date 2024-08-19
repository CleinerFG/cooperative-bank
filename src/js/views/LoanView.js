export class LoanView {
  constructor(parentNode, loan) {
    this._parentNode = parentNode;
    this._loan = loan;
  }

  render(type) {
    let entity;
    let entityValue;
    let btnText;
    switch (type) {
      case "payable":
        entity = "Creditor";
        entityValue = this._loan.creditor;
        btnText = "Pay Installment";
      case "receivable":
        entity = "Debtor";
        entityValue = this._loan.debtor;
        btnText = "Payments";
    }

    const htmlStr = `
    <article class="card card-data">
      <header class="card-data__header">Loan ID: ${this._loan.id}</header>
      <main class="card-data__content">
        <div class="card-data__item">
          <span class="card-data__label">${entity}</span>
          <span class="card-data__value">${entityValue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Date</span>
          <span class="card-data__value">${this._loan.date}</span>
         </div>
        <div class="card-data__item">
          <span class="card-data__label">Value</span>
          <span class="card-data__value">$ ${this._loan.value}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Description</span>
          <span class="card-data__value">${this._loan.description}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Remaining Installments</span>
          <span class="card-data__value">${this._loan.remainingInstallments}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Installment value</span>
          <span class="card-data__value">$ ${this._loan.installmentValue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Amount Due</span>
          <span class="card-data__value">$ ${this._loan.amountDue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Interest Rate</span>
          <span class="card-data__value">${this._loan.interestRate}% p.m</span>
        </div>
      </main>
      <footer class="card-data__footer">
        <button class="btn card-data__btn">${btnText}</button>
      </footer>
    </article>
    `;
    this._parentNode.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
