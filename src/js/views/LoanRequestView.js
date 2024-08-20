import { ComponentView } from "./ComponentView.js";

export class LoanRequestView extends ComponentView {
  constructor(container, loanRequest) {
    super(container, loanRequest);
  }

  render() {
    let cssClass = "pending";
    let btntext = "Cancel Request";
    switch (this.component.status) {
      case "Accepted":
        cssClass = "success";
        btntext = "Confirm";
        break;
      case "Denied":
        cssClass = "fail";
        btntext = "Confirm";
    }
    //Use nullish coalescing to define which attribute will be displayed
    // loanRequest.creditor ?? loanRequest.debtor
    const htmlStr = `
    <article id="$request-${this.component.id}" class="card card-data request__${cssClass}">
          <header class="card-data__header">${this.component.status}</header>
          <main class="card-data__content">
            <div class="card-data__item">
              <span class="card-data__label">Creditor</span>
              <span class="card-data__value">${this.component.creditor}</span>
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
            <button class="btn btn-${cssClass} card-data__btn ">${btntext}</button>
          </footer>
        </article>
    `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
