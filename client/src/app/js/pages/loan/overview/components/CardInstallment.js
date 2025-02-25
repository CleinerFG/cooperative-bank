import '../../../../types/loanType.js';

import { ConfirmOperationModal } from '../../../../components/modal/ConfirmOperationModal.js';
import {
  formatDate,
  numberToCurrency,
} from '../../../../../../global/js/utils/formatters.js';
import { capitalize } from '../../../../../../global/js/utils/stringUtils.js';
import { Card } from '../../../../components/Card.js';
import { OperationDetailsModal } from '../../../../components/modal/OperationDetailsModal.js';

export class CardInstallment extends Card {
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

  async #seePaymentInfoHandler() {
    try {
      const serviceModule = await import('../../../../services/LoanService.js');
      const service = serviceModule.default;
      console.table(this._apiData);

      const params = {
        serviceMethod: service.getInstallmentPayment,
        operationId: this._apiData.id,
        title: 'payment details',
      };
      new OperationDetailsModal(params);
    } catch (e) {
      console.error(e);
    }
  }

  #actionBtnHandler() {
    this.#actionBtnElement.addEventListener(
      'click',
      this.#actionBtnConfig.action.bind(this)
    );
  }

  get #actionBtnElement() {
    return this._containerElement.querySelector(`#btn-${this._id}`);
  }

  get #actionBtnConfig() {
    const status = this._apiData.status;
    return {
      label:
        (this._entityType === 'payable') & (status === 'pending')
          ? 'Pay'
          : 'See',
      action:
        (this._entityType === 'payable') & (status === 'pending')
          ? this.#makePaymentHandler
          : this.#seePaymentInfoHandler,
    };
  }

  get _footerTemplate() {
    return `
     <button id="btn-${this._id}" class="btn">
        ${this.#actionBtnConfig.label}
     </button>
    `;
  }

  _setListeners() {
    this.#actionBtnHandler();
  }
}
