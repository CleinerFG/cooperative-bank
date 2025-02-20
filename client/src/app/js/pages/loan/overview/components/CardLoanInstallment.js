import '../../../../types/loanType.js';

import { ConfirmOperationModal } from '../../../../components/modal/ConfirmOperationModal.js';
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
    let txt = 'Pay';
    let action = 'pay';
    if (this._apiData.status === 'paid') {
      txt = 'See';
      action = 'see';
    }
    return `
     <button id="btn-${this._id}" class="btn card-data__btn" data-action="${action}">
        ${txt}
      </button>
    `;
  }

  _setListeners() {
    this._containerElement
      .querySelector(`#btn-${this._id}`)
      .addEventListener('click', async () => {
        const modal = new ConfirmOperationModal();
        const token = await modal.getToken();
        console.log(`Token from modal: ${token}`);
      });
  }
}
