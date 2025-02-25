import { capitalize } from '../../../../global/js/utils/stringUtils.js';
import { simulateWait } from '../../../../global/js/utils/tests.js';
import '../../types/operationDetailsModalType.js';
import { Modal } from './Modal.js';

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

  get #confirmBtnElement() {
    return this._footerElement.querySelector('.btn');
  }

  #confirmBtnHandler() {
    this.#confirmBtnElement.addEventListener(
      'click',
      this._handleCloseModal.bind(this)
    );
  }

  async #fecthDetailsSuccessHandler() {
    const InfoDataDisplayModule = await import('../common/InfoDataDisplay.js');
    const InfoDataDisplay = InfoDataDisplayModule.default;
    const container = this._contentElement.querySelector(
      '.info-container.operation-details'
    );
    const infoDataItems = [
      {
        label: 'date',
        apiDataProp: 'date',
        valueFormatter: 'date',
      },
      {
        label: 'value',
        apiDataProp: 'value',
        valueFormatter: 'currency',
      },
    ];

    const params = { containerElement: container, items: infoDataItems };
    const infoDataDisplayInstance = new InfoDataDisplay(params);
    infoDataDisplayInstance.apiData = this.#apiData;
    infoDataDisplayInstance.display();
    this.#confirmBtnElement.classList.add('btn-success');
  }

  #fetchDetailsFailHandler(error) {
    const span = `<span>${error}</span>`;
    this._contentElement.innerHTML = span;
    this.#confirmBtnElement.classList.add('btn-fail');
  }

  async #fetchData() {
    try {
      await simulateWait(5);
      const res = await this.#serviceMethod(this.#operationId);
      if (res.error) {
        this.#fetchDetailsFailHandler(res.error);
        return;
      }
      this.#apiData = res;
      this.#fecthDetailsSuccessHandler();
    } catch (e) {
      console.log(e);
    }
  }

  _setListeners() {
    super._setListeners();
    this.#confirmBtnHandler();
  }

  _setup() {
    this.#fetchData();
  }
}
