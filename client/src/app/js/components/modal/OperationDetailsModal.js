import { capitalize } from '../../../../global/js/utils/stringUtils.js';
import '../../types/operationDetailsModalType.js';
import { Modal } from './Modal.js';
import { InfoDataDisplay } from '../common/InfoDataDisplay.js';

export class OperationDetailsModal extends Modal {
  #apiData;
  #serviceMethod;
  #operationId;
  #title;

  /**
   * @param {OperationDetailsModalParams} params
   */
  constructor(params) {
    super('operation-details');
    this.#serviceMethod = params.serviceMethod;
    this.#operationId = params.operationId;
    this.#title = params.title;
    this._init();
  }

  get _headerTemplate() {
    return `<h2 class="modal-title">${capitalize(this.#title)}</h2>`;
  }

  get _contentTemplate() {
    return `
      <div class="info-container operation-details">
        <div class="loader"></div>
      </div>
      `;
  }

  get _footerTemplate() {
    return '<button class="btn">OK</button>';
  }

  async #fetchData() {
    try {
      const res = await this.#serviceMethod(this.#operationId);
      if (res.error) {
        this._contentElement.innerHTML = '<span>Payment not found</span>';
        return;
      }
      this.#apiData = res;
      console.table(this.#apiData);
    } catch (e) {
      console.log(e);
    }
  }

  _setup() {
    this.#fetchData();
  }
}
