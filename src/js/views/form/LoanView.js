import { ComponentView } from "./ComponentView.js";

export class LoanView extends ComponentView {
  constructor(container, loan) {
    super(container, loan);
  }

  render(type) {
    let entity;
    let entityValue;
    switch (type) {
      case "payable":
        entity = "Creditor";
        entityValue = this.component.creditor;
        break;
      case "receivable":
        entity = "Debtor";
        entityValue = this.component.debtor;
        break;
    }

    const htmlStr = `
    <article class="card card-data">
      <header class="card-data__header">Loan ID: ${this.component.id}</header>
      <main class="card-data__content">
        <div class="card-data__item">
          <span class="card-data__label">${entity}</span>
          <span class="card-data__value">${entityValue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Date</span>
          <span class="card-data__value">${this.component.date}</span>
         </div>
        <div class="card-data__item">
          <span class="card-data__label">Value</span>
          <span class="card-data__value">$ ${this.component.value}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Description</span>
          <span class="card-data__value">${this.component.description}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Remaining Installments</span>
          <span class="card-data__value">${this.component.remainingInstallments}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Installment value</span>
          <span class="card-data__value">$ ${this.component.installmentValue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Amount Due</span>
          <span class="card-data__value">$ ${this.component.amountDue}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Interest Rate</span>
          <span class="card-data__value">${this.component.rate}% p.m</span>
        </div>
      </main>
      <footer class="card-data__footer">
        <button class="btn card-data__btn">Payments</button>
      </footer>
    </article>
    `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
