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

  #getLabelValue() {
    const { entity, entityValue } = this._getEntityInfo();
    return [
      { label: entity, value: entityValue },
      { label: "Date", value: this.component.date },
      { label: "Value", value: this.component.value },
      { label: "Installments", value: this.component.installments },
      { label: "Installment Value", value: this.component.installmentValue },
      { label: "Interest Rate", value: this.component.rate },
    ];
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
    const htmlStr = `
      <article id="request-${this.component.type}-${this.component.id}" 
      class="card card-data request__${cssClass}">
        ${this._createHeaderCard(this.component.status)}
        ${this._createMainCard(...this.#getLabelValue())}
        ${this._createFooterCard(this.#getFooterStr())}
      </article>
    `;

    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
