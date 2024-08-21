import { DisplayView } from "./DisplayView.js";

export class LoanView extends DisplayView {
  constructor(container, loan) {
    super(container, loan);
  }

  get #cssId() {
    return `loan-${this.component.id}`;
  }

  get #cssClass() {
    return `loan__${this.component.type}`;
  }

  get #btnClass() {
    return "";
  }

  get #btnText() {
    return "Payments";
  }

  get #labelValue() {
    const { entity, entityValue } = this._entityInfo;
    return [
      { label: entity, value: entityValue },
      { label: "Date", value: this.component.date },
      { label: "Value", value: this.component.value },
      { label: "Description", value: this.component.description },
      { label: "Installments", value: this.component.installments },
      {
        label: "Remaining Installments",
        value: this.component.remainingInstallments,
      },
      { label: "Installment Value", value: this.component.installmentValue },
      { label: "Amount Due", value: this.component.amountDue },
      { label: "Interest Rate", value: this.component.rate },
    ];
  }

  get #headerCard() {
    return this._createHeaderCard(`Loan ID: ${this.component.id}`);
  }

  get #mainCard() {
    return this._createMainCard(...this.#labelValue);
  }

  get #footerCard() {
    const str = `
      <button class="btn card-data__btn">${this.#btnText}</button>
    `;
    return this._createFooterCard(str);
  }

  render() {
    const cardStr = this._createCard(
      this.#cssId,
      this.#cssClass,
      this.#headerCard,
      this.#mainCard,
      this.#footerCard
    );
    this.container.insertAdjacentHTML("afterbegin", cardStr);
  }
}
