import { ComponentView } from "../../../../../js/views/ComponentView.js";

export class LoanView extends ComponentView {
  constructor(container, loan) {
    super(container, loan);
  }

  get _cssId() {
    return `loan-${this.componentModel.id}`;
  }

  get _cssClass() {
    return `loan__${this.componentModel.type}`;
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
      { label: "Date", value: this.componentModel.date },
      { label: "Value", value: this.componentModel.value },
      { label: "Description", value: this.componentModel.description },
      { label: "Installments", value: this.componentModel.installments },
      {
        label: "Remaining Installments",
        value: this.componentModel.remainingInstallments,
      },
      {
        label: "Installment Value",
        value: this.componentModel.installmentValue,
      },
      { label: "Amount Due", value: this.componentModel.amountDue },
      { label: "Interest Rate", value: this.componentModel.rate },
      { label: "Total Loan Cost", value: this.componentModel.totalLoanCost },
    ];
  }

  get _headerCard() {
    return this._createHeaderCard(`Loan ID: ${this.componentModel.id}`);
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
