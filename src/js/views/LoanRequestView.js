import { ComponentView } from "./ComponentView.js";

export class LoanRequestView extends ComponentView {
  constructor(container, loanRequest) {
    super(container, loanRequest);
  }

  get _cssId() {
    return `request-${this.componentModel.type}-${this.componentModel.id}`;
  }

  get _cssClass() {
    switch (this.componentModel.status) {
      case "Accepted":
        return `request__success`;
      case "Denied":
        return `request__fail`;
      default:
        return `request__pending`;
    }
  }

  get _btnClass() {
    switch (this.componentModel.status) {
      case "Accepted":
        return "btn-success";
      case "Denied":
        return "btn-fail";
      default:
        return "btn-pending";
    }
  }

  get _btnText() {
    switch (this.componentModel.status) {
      case "Accepted":
      case "Denied":
        return "Confirm";
      default:
        return "Cancel Request";
    }
  }

  get _labelValue() {
    const { entity, entityValue } = this._entityInfo;
    return [
      { label: entity, value: entityValue },
      { label: "Date", value: this.componentModel.date },
      { label: "Value", value: this.componentModel.value },
      { label: "Description", value: this.componentModel.description },
      { label: "Installments", value: this.componentModel.installments },
      { label: "Installment Value", value: this.componentModel.installmentValue },
      { label: "Interest Rate", value: this.componentModel.rate },
    ];
  }

  get _headerCard() {
    return this._createHeaderCard(this.componentModel.status);
  }

  get _mainCard() {
    return this._createMainCard(...this._labelValue);
  }

  get _footerCard() {
    const footerOpened = `
      <button class="btn ${this._btnClass} card-data__btn">
        ${this._btnText}
      </button>
    `;
    const footerReceived = `
      <button class="btn btn-success card-data__btn">Approve</button>
      <button class="btn btn-fail card-data__btn">Recuse</button>
    `;
    const str =
      this.componentModel.type === "opened" ? footerOpened : footerReceived;
    return this._createFooterCard(str);
  }
}
