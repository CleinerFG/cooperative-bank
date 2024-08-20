import { DisplayView } from "./DisplayView.js";

export class LoanView extends DisplayView {
  constructor(container, loan) {
    super(container, loan);
  }
  render() {
    const { entity, entityValue } = this._getEntityInfo();

    const htmlStr = `
    <article class="card card-data">
      <header class="card-data__header">Loan ID: ${this.component.id}</header>
      <main class="card-data__content">
        ${this._renderCardItem(entity, entityValue)}
        ${this._renderCardItem("Date", this.component.date)}
        ${this._renderCardItem("Value", "$ " + this.component.value)}
        ${this._renderCardItem("Description", this.component.description)}
        ${this._renderCardItem(
          "Installments",
          this.component.installments + " months"
        )}
        ${this._renderCardItem(
          "Remaining Installments",
          this.component.remainingInstallments
        )}
        ${this._renderCardItem(
          "Installment Value",
          "$ " + this.component.installmentValue
        )}
        ${this._renderCardItem("Amount Due", "$ " + this.component.amountDue)}
        ${this._renderCardItem("Interest Rate", this.component.rate + "% p.m.")}
      </main>
      <footer class="card-data__footer">
        <button class="btn card-data__btn">Payments</button>
      </footer>
    </article>
    `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
