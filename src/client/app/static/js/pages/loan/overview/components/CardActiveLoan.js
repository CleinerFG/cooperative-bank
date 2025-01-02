import { CardComponent } from '../../../../components/CardComponent.js';
import { LoanModel } from '../models/LoanModel.js';

/**
 * Represents a card component specifically for displaying Active Loan.
 * Implements abstract methods from `CardComponent` to provide templates and configurations
 * for rendering loan request details.
 *
 * @class
 * @extends CardComponent
 */
export class CardActiveLoan extends CardComponent {
  get _ModelClass() {
    return LoanModel;
  }

  get _id() {
    return `active-loan-${this._model.id}`;
  }

  get _cssClass() {
    return `active-loan`;
  }

  get _itemsArray() {
    return [
      {
        label: this._model.creditor ? 'Creditor' : 'Debtor',
        value: this._model.creditor || this._model.debtor,
      },
      { label: 'Date', value: this._model.date },
      { label: 'Value', value: this._model.value },
      { label: 'Description', value: this._model.description },
      { label: 'Installments', value: this._model.installments },
      {
        label: 'Remaining Installments',
        value: this._model.remainingInstallments,
      },
      {
        label: 'Installment Value',
        value: this._model.installmentValue,
      },
      { label: 'Amount Due', value: this._model.amountDue },
      { label: 'Interest Rate', value: this._model.rate },
      { label: 'Total Loan Cost', value: this._model.totalLoanCost },
    ];
  }

  get _headerTemplate() {
    return `ID: ${this._model.id}`;
  }

  get _footerTemplate() {
    return `
     <button id="btn-active-loan-${this._model.id}" class="btn card-data__btn">
        Installments
      </button>
    `;
  }

  /**
   * Handles modal behavior.
   * In this case, it does not open a modal.
   * @note The modal for the cardActiveLoan is still to be built.
   */
  _handleModal() {
    // pass
  }
}
