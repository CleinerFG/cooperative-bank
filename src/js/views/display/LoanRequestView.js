import { DisplayView } from "./DisplayView.js";

export class LoanRequestView extends DisplayView {
  constructor(container, loanRequest) {
    super(container, loanRequest);
  }

  #getCssClassAndBtnText() {
    switch (this.component.status) {
      case "Accepted":
        return { cssClass: "success", btnText: "Confirm" };
      case "Denied":
        return { cssClass: "fail", btnText: "Confirm" };
      default:
        return { cssClass: "pending", btnText: "Cancel Request" };
    }
  }

  #getFooterStr() {
    const { cssClass, btnText } = this.#getCssClassAndBtnText();
    const footerOpened = `
      <button class="btn btn-${cssClass} card-data__btn">
        ${btnText}
      </button>
    `;
    const footerReceived = `
      <button class="btn btn-success card-data__btn">Approve</button>
      <button class="btn btn-fail card-data__btn">Recuse</button>
    `;
    return this.component.debtor ? footerReceived : footerOpened;
  }

  render() {
    const { cssClass } = this.#getCssClassAndBtnText();
    const { entity, entityValue } = this._getEntityInfo();
    const footerStr = this.#getFooterStr();

    const htmlStr = `
      <article id="request-${this.component.type}-${
      this.component.id
    }" class="card card-data request__${cssClass}">
        <header class="card-data__header">${this.component.status}</header>
        <main class="card-data__content">
          ${this._renderCardItem(entity, entityValue)}
          ${this._renderCardItem("Date", this.component.date)}
          ${this._renderCardItem("Value", `$ ${this.component.value}`)}
          ${this._renderCardItem(
            "Installments",
            `${this.component.installments} months`
          )}
          ${this._renderCardItem(
            "Installment value",
            `$ ${this.component.installmentValue}`
          )}
          ${this._renderCardItem(
            "Interest Rate",
            `${this.component.rate}% p.m.`
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
