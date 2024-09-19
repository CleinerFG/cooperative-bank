import { ComponentView } from "../../../../../js/views/ComponentView.js";

export class OpenedRequestView extends ComponentView {
  get _cssId() {
    return `request-opened-${this.componentModel.id}`;
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

  get btnElement() {
    return document.getElementById(
      `btn-opened-request-${this.componentModel.id}`
    );
  }

  get _labelValue() {
    return [
      { label: "Creditor", value: this.componentModel.creditor },
      { label: "Date", value: this.componentModel.date },
      { label: "Value", value: this.componentModel.value },
      { label: "Description", value: this.componentModel.description },
      { label: "Installments", value: this.componentModel.installments },
      {
        label: "Installment Value",
        value: this.componentModel.installmentValue,
      },
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
    const str = `
      <button id="btn-opened-request-${this.componentModel.id}" class="btn ${this._btnClass} card-data__btn">
        ${this._btnText}
      </button>
    `;
    return this._createFooterCard(str);
  }
}
