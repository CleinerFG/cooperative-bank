import { CardComponent } from "../../../../../js/components/CardComponent.js";
import { ActiveLoanModel } from "../models/ActiveLoanModel.js";

export class CardActiveLoan extends CardComponent {
  get _ModelClass() {
    return ActiveLoanModel;
  }

  get _cssId() {
    return `active-loan-${this._model.id}`;
  }

  get _cssClass() {
    return `active-loan`;
  }

  get _cardItemsTemplate() {
    return [
      {
        label: this._model.creditor ? "Creditor" : "Debtor",
        value: this._model.creditor || this._model.debtor,
      },
      { label: "Date", value: this._model.date },
      { label: "Value", value: this._model.value },
      { label: "Description", value: this._model.description },
      { label: "Installments", value: this._model.installments },
      {
        label: "Remaining Installments",
        value: this._model.remainingInstallments,
      },
      {
        label: "Installment Value",
        value: this._model.installmentValue,
      },
      { label: "Amount Due", value: this._model.amountDue },
      { label: "Interest Rate", value: this._model.rate },
      { label: "Total Loan Cost", value: this._model.totalLoanCost },
    ];
  }

  get _cardHeaderTemplate() {
    return `ID: ${this._model.id}`;
  }

  get _cardFooterTemplate() {
    return `
     <button id="btn-active-loan-${this._model.id}" class="btn card-data__btn">
        Action
      </button>
    `;
  }
}
