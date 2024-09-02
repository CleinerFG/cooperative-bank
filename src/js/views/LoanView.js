import { ComponentView } from "./ComponentView.js";

export class LoanView extends ComponentView {
  constructor(container, loan) {
    super(container, loan);
  }

  get _cssId() {
    return `loan-${this.component.id}`;
  }

  get _cssClass() {
    return `loan__${this.component.type}`;
  }

  get _btnClass() {
    return "";
  }

  get _btnText() {
    return "Payments";
  }

  get _labelValue() {
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
      { label: "Total Loan Cost", value: this.component.totalLoanCost },
    ];
  }

  get _headerCard() {
    return this._createHeaderCard(`Loan ID: ${this.component.id}`);
  }

  get _mainCard() {
    return this._createMainCard(...this._labelValue);
  }

  get _footerCard() {
    const str = `
      <button class="btn card-data__btn">${this._btnText}</button>
    `;
    return this._createFooterCard(str);
  }
}
