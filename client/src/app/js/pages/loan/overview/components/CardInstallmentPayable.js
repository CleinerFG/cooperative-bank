import '../../../../types/loanType.js';

import { ConfirmOperationModal } from '../../../../components/modal/ConfirmOperationModal.js';
import {
  formatDate,
  numberToCurrency,
} from '../../../../../../global/js/utils/formatters.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import { Card } from '../../../../components/Card.js';

export class CardInstallmentPayable extends Card {
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
    const status = this._apiData.status;
    const cssClass = status === 'pending' ? 'span-pending' : 'span-success';
    const spanStatus = `
      <span class="span-status ${cssClass}">${capitalize(this._apiData.status)}</span>
      `;
    return `
      <div class="card-title">
        <span class="span-title">Installment Nº ${this._index + 1}</span>
      </div>
      ${spanStatus}
    `;
  }

  async #makePaymentHandler() {
    const modal = new ConfirmOperationModal();
    const token = await modal.getToken();
    console.log(`Token from modal: ${token}`);
  }

  async _seePaymentInfoHandler() {
    console.log('---Implement see payment---');
  }

  #handleActionBtn() {
    return this._apiData.status === 'pending'
      ? this.#makePaymentHandler()
      : this._seePaymentInfoHandler();
  }

  get #actionBtnElement() {
    return this._containerElement.querySelector(`#btn-${this._id}`);
  }

  get _footerTemplate() {
    const status = this._apiData.status;
    return `
     <button id="btn-${this._id}" class="btn">
        ${status === 'paid' ? 'See' : 'Pay'}
     </button>
    `;
  }

  _setListeners() {
    this.#actionBtnElement.addEventListener(
      'click',
      this.#handleActionBtn.bind(this)
    );
  }
}
