import '../../../../types/loanType.js';

import {
  formatDate,
  numberToCurrency,
} from '../../../../../../global/js/utils/formatters.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import { Card } from '../../../../components/Card.js';

export class CardLoanInstallment extends Card {
  /**
   * @type {LoanInstallmentData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _itemsArray() {
    return [
      {
        label: 'Due date',
        value: formatDate(this._apiData.dueDate),
      },
      {
        label: 'Value',
        value: numberToCurrency(this._apiData.value),
      },
    ];
  }

  get _headerTemplate() {
    const statusCssMap = {
      pending: 'span-pending',
      paid: 'span-success',
    };
    const cssClass = statusCssMap[this._apiData.status];
    const status = `<span class="span-status ${cssClass}">${capitalize(this._apiData.status)}</span>`;
    return `
      <div class="card-title">
        <span>Installment Nº ${this._index + 1}</span>
      </div>
      ${status}
    `;
  }

  get _footerTemplate() {
    return `
     <button id="btn-${this._id}" class="btn card-data__btn">
        Pay
      </button>
    `;
  }

  _setListeners() {
    this._containerElement
      .querySelector(`#btn-${this._id}`)
      .addEventListener('click', () => {
        console.log('Installment click -', this._index);
      });
  }
}
