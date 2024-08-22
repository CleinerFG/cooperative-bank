import { DisplayView } from "./DisplayView.js";

export class LoanRequestView extends DisplayView {
  constructor(container, loanRequest) {
    super(container, loanRequest);
  }

  get _cssId() {
    return `request-${this.component.type}-${this.component.id}`;
  }

  get _cssClass() {
    switch (this.component.status) {
      case "Accepted":
        return `request__success`;
      case "Denied":
        return `request__fail`;
      default:
        return `request__pending`;
    }
  }

  get _btnClass() {
    switch (this.component.status) {
      case "Accepted":
        return "btn-success";
      case "Denied":
        return "btn-fail";
      default:
        return "btn-pending";
    }
  }

  get _btnText() {
    switch (this.component.status) {
      case "Accepted" || "Denied":
        return "Confirm";
      default:
        return "Cancel Request";
    }
  }

  get _labelValue() {
    const { entity, entityValue } = this._entityInfo;
    return [
      { label: entity, value: entityValue },
      { label: "Date", value: this.component.date },
      { label: "Value", value: this.component.value },
      { label: "Installments", value: this.component.installments },
      { label: "Installment Value", value: this.component.installmentValue },
      { label: "Interest Rate", value: this.component.rate },
    ];
  }

  get _headerCard() {
    return this._createHeaderCard(this.component.status);
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
      this.component.type === "opened" ? footerOpened : footerReceived;
    return this._createFooterCard(str);
  }
}
