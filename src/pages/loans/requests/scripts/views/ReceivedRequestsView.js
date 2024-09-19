import { ComponentView } from "../../../../../js/views/ComponentView.js";

export class ReceivedRequestView extends ComponentView {
  get approveBtnElement() {
    return document.getElementById(
      `btn-received-request-approve-${this.componentModel.id}`
    );
  }

  get recuseBtnElement() {
    return document.getElementById(
      `btn-received-request-recuse-${this.componentModel.id}`
    );
  }

  get _cssId() {
    return `request-received-${this.componentModel.id}`;
  }

  get _cssClass() {
    return `request__pending`;
  }

  get _labelValue() {
    return [
      { label: "Debtor", value: this.componentModel.debtor },
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
      <button id="btn-received-request-approve-${this.componentModel.id}" class="btn btn-success card-data__btn">Approve</button>
      <button id="btn-received-request-recuse-${this.componentModel.id}" class="btn btn-fail card-data__btn">Recuse</button>
    `;
    return this._createFooterCard(str);
  }
}
