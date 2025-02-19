import '../../../../types/loanType.js';
import { CardLoanOverview } from '../../overview/components/CardLoanOverview.js';
import { ConfirmOperationModal } from '../../../../../js/components/modal/ConfirmOperationModal.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import {
  numberToCurrency,
  numberToPercent,
  formatDate,
} from '../../../../../../global/js/utils/formatters.js';
import { handleIconDark } from '../../../../../../global/js/utils/themeUtils.js';

export class CardLoanRequestOpened extends CardLoanOverview {
  /**
   * @type {LoanRequestOpenedData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _cssClass() {
    return `request-opened`;
  }

  get _itemsArray() {
    return [
      {
        label: 'Creditor',
        value: this._apiData.creditor,
      },
      {
        label: 'Credit value',
        value: numberToCurrency(this._apiData.creditValue),
      },
      {
        label: 'Total amount',
        value: numberToCurrency(this._apiData.totalAmount),
      },
      {
        label: 'Installment value',
        value: numberToCurrency(this._apiData.installmentValue),
      },
      {
        label: 'Interest rate',
        value: `${numberToPercent(this._apiData.rate)} p.m.`,
      },
      {
        label: 'Installments',
        value: this._apiData.installments,
      },
    ];
  }

  get _headerTemplate() {
    const statusCssMap = {
      pending: 'span-pending',
      rejected: 'span-fail',
      approved: 'span-success',
    };
    const cssClass = statusCssMap[this._apiData.status];
    return `
        <div class="card-title">
          <img src="${this._modalityImgSrc[this._apiData.modality]}" alt="Modality"
           class="icon ${handleIconDark()}">
          <span>${capitalize(this._apiData.modality)}</span>
        </div>
        <span class="span-status ${cssClass}">${capitalize(this._apiData.status)}</span>
        <span class="span-date">Started on ${formatDate(this._apiData.date)}</span>
        `;
  }

  get _footerTemplate() {
    return this._buttonsByStatus;
  }

  get _modalAction() {
    return this._apiData.status === 'pending' ? 'cancel' : 'confirm';
  }

  get _buttonsByStatus() {
    const cssClass = this._apiData.status === 'pending' ? 'btn-fail' : '';
    return `
      <button id="btn-${this._cssId}-${this._modalAction}" class="btn card-data__btn ${cssClass}">
         ${capitalize(this._modalAction)}
      </button>
     `;
  }

  _setListeners() {
    this._containerElement
      .querySelector(`#btn-${this._cssId}-${this._modalAction}`)
      .addEventListener('click', () => {
        new ConfirmOperationModal();
      });
  }
}
