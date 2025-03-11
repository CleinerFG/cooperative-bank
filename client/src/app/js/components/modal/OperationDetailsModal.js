import { capitalize } from '../../../../global/js/utils/stringUtils.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';
import '../../types/operationDetailsModalType.js';
import { Modal } from './Modal.js';
import { translate } from '../../../../global/js/i18n/Translator.js';

export class OperationDetailsModal extends Modal {
  #apiData;
  #serviceMethod;
  #operationId;
  #title;
  #infoDataDisplay;
  #errorCodes;

  /**
   * @param {OperationDetailsModalParams} params
   */
  constructor(params) {
    super('operation-details');
    this.#serviceMethod = params.serviceMethod;
    this.#operationId = params.operationId;
    this.#title = params.title;
    this.#errorCodes = params.errorCodes;
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

  async #initInfoDataDisplay() {
    const module = await import('../common/InfoDataDisplay.js');
    const InfoDataDisplay = module.default;

    const container = this._contentElement.querySelector(
      '.info-container.operation-details'
    );

    const infoDataItems = [
      {
        label: translate('date'),
        apiDataProp: 'date',
        valueFormatter: 'date',
      },
      {
        label: translate('value'),
        apiDataProp: 'value',
        valueFormatter: 'currency',
      },
    ];

    const params = { containerElement: container, items: infoDataItems };
    this.#infoDataDisplay = new InfoDataDisplay(params);
  }

  #confirmBtnHandler() {
    this.#confirmBtnElement.addEventListener(
      'click',
      this._handleCloseModal.bind(this)
    );
  }

  async #fecthDetailsSuccessHandler() {
    this.#infoDataDisplay.apiData = this.#apiData;
    this.#infoDataDisplay.display();
  }

  /**
   * @param {'notFoundInstallmentPay'} error
   */
  #fetchDetailsFailHandler(error) {
    const icon = `<img class="modal-icon" src="${ASSETS_ROUTE}/icons/icon-warning.svg" />`;
    const message = `<span class="info-text">${this.#errorCodes[error]}</span>`;
    this._contentElement.innerHTML = icon + message;
  }

  async #fetchData() {
    try {
      const res = await this.#serviceMethod(this.#operationId);

      if (res.error) return this.#fetchDetailsFailHandler(res.error);

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
    this.#initInfoDataDisplay();
    this.#fetchData();
  }
}
