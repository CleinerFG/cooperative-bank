import { ComponentView } from "./display/ComponentView.js";

export class LoanRequestView extends ComponentView {
  constructor(container, loanRequest) {
    super(container, loanRequest);
  }

  render() {
    let cssClass = "pending";
    let btnText = "Cancel Request";
    switch (this.component.status) {
      case "Accepted":
        cssClass = "success";
        btnText = "Confirm";
        break;
      case "Denied":
        cssClass = "fail";
        btnText = "Confirm";
    }

    //Use nullish coalescing to define which attribute will be displayed
    let entity = this.component.creditor ? "Creditor" : "Debtor";
    let entityValue = this.component.creditor ?? this.component.debtor;
    btnText = this.component.debtor ? "Approve Loan" : btnText;

    const htmlStr = `
    <article id="$request-${this.component.id}" class="card card-data request__${cssClass}">
          <header class="card-data__header">${this.component.status}</header>
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
              <span class="card-data__label">Installments</span>
              <span class="card-data__value">${this.component.installments} months</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Installment value</span>
              <span class="card-data__value">$ ${this.component.installmentValue}</span>
            </div>
            <div class="card-data__item">
              <span class="card-data__label">Interest Rate</span>
              <span class="card-data__value">${this.component.rate}% p.m</span>
            </div>
          </main>
          <footer class="card-data__footer">
            <button class="btn btn-${cssClass} card-data__btn ">${btnText}</button>
          </footer>
        </article>
    `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
