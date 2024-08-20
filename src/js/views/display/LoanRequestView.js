import { DisplayView } from "./DisplayView.js";

export class LoanRequestView extends DisplayView {
  constructor(container, loanRequest) {
    super(container, loanRequest);
  }

  #getCssClassAndButtonText() {
    switch (this.component.status) {
      case "Accepted":
        return { cssClass: "success", btnText: "Confirm" };
      case "Denied":
        return { cssClass: "fail", btnText: "Confirm" };
      default:
        return { cssClass: "pending", btnText: "Cancel Request" };
    }
  }

  #getEntityInfo() {
    const entity = this.component.creditor ? "Creditor" : "Debtor";
    const entityValue = this.component.creditor ?? this.component.debtor;
    return { entity, entityValue };
  }

  #getFooterStr() {
    const footerOpened = `
      <button class="btn btn-${
        this.#getCssClassAndButtonText().cssClass
      } card-data__btn">
        ${this.#getCssClassAndButtonText().btnText}
      </button>
    `;
    const footerReceived = `
      <button class="btn btn-success card-data__btn">Approve</button>
      <button class="btn btn-fail card-data__btn">Recuse</button>
    `;
    return this.component.debtor ? footerReceived : footerOpened;
  }

  #renderCardItem(label, value) {
    return `
      <div class="card-data__item">
        <span class="card-data__label">${label}</span>
        <span class="card-data__value">${value}</span>
      </div>
    `;
  }

  render() {
    const { cssClass } = this.#getCssClassAndButtonText();
    const { entity, entityValue } = this.#getEntityInfo();
    const footerStr = this.#getFooterStr();

    const htmlStr = `
      <article id="request-${
        this.component.id
      }" class="card card-data request__${cssClass}">
        <header class="card-data__header">${this.component.status}</header>
        <main class="card-data__content">
          ${this.#renderCardItem(entity, entityValue)}
          ${this.#renderCardItem("Date", this.component.date)}
          ${this.#renderCardItem("Value", `$ ${this.component.value}`)}
          ${this.#renderCardItem(
            "Installments",
            `${this.component.installments} months`
          )}
          ${this.#renderCardItem(
            "Installment value",
            `$ ${this.component.installmentValue}`
          )}
          ${this.#renderCardItem(
            "Interest Rate",
            `${this.component.rate}% p.m`
          )}
        </main>
        <footer class="card-data__footer">
          ${footerStr}
        </footer>
      </article>
    `;

    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
