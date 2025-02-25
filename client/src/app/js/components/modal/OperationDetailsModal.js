import { Modal } from './Modal.js';
// import { InfoDataDisplay } from '../common/InfoDataDisplay.js';
import loanService from '../../services/LoanService.js';

export class OperationDetailsModal extends Modal {
  #apiData;
  #operationsMap = {
    installmentPayment: {
      title: 'Payment details',
      service: loanService.getInstallmentPayment,
    },
  };
  #operationType;
  #operationId;

  /**
   * @param {'installmentPayment'} operationType
   */
  constructor(operationType, operationId) {
    super('operation-details');
    this.#operationType = operationType;
    this.#operationId = operationId;
    this._init();
  }

  get _headerTemplate() {
    return `<h2 class="modal-title">${this.#operationsMap[this.#operationType].title}</h2>`;
  }

  get _contentTemplate() {
    return `
      <div class="info-container operation-details>
        <div class="loader"></div>
      </div>
      `;
  }

  get _footerTemplate() {
    return '<button class="btn btn-success">OK</button>';
  }

  async #fetchData() {
    try {
      this.#apiData = await loanService.getInstallmentPayment(
        this.#operationId
      );
      console.table(this.#apiData);
    } catch (e) {
      console.log(e);
    }
  }

  _setup() {
    this.#fetchData();
  }
}
