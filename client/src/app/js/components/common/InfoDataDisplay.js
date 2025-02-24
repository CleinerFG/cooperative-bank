import '../../types/infoDataDisplayType.js';
import {
  toCamelCase,
  capitalize,
} from '../../../../global/js/utils/stringUtils.js';
import { handleIconDark } from '../../../../global/js/utils/themeUtils.js';
import { ApiDataNotDefinedError } from '../../errors/ApiDataNotDefinedError.js';
import {
  formatCpf,
  formatDate,
  numberToCurrency,
  numberToPercent,
} from '../../../../global/js/utils/formatters.js';

export class InfoDataDisplay {
  #containerElement;
  #apiData;
  #items;

  /**
   *
   * @param {InfoDataDisplayParams} params
   */
  constructor(params) {
    this.#containerElement = params.containerElement;
    this.#items = params.items;
    this.#render();
  }

  /**
   * @param {Object<string,string|number>[]} value
   */
  set apiData(value) {
    this.#apiData = value;
  }

  /**
   * @param {Item}
   */
  #getFormatedValue({ apiDataProp, valueFormatter }) {
    const formattersMap = {
      capitalize: capitalize,
      percent: numberToPercent,
      currency: numberToCurrency,
      date: formatDate,
      cpf: formatCpf,
    };
    const value = this.#apiData[apiDataProp];
    if (valueFormatter) formattersMap[valueFormatter](value);
    return formattersMap.capitalize(value);
  }

  /**
   * @param {Item} param
   */
  #buildItemTemplate({ label, icon }) {
    const hasIcon = () => {
      if (icon)
        `<img class="icon ${handleIconDark()}" src="${ASSETS_ROUTE}/icons/loan/details/${icon}">`;
      return '';
    };
    const valueId = toCamelCase(label);
    return `
        <div class="info-item">
          ${hasIcon()}
          <div class="info-item__container">
            <span class="info-label">${capitalize(label)}</span>
            <span id="${valueId}" class="info-value skelon"></span>
          </div>
        </div>
      `;
  }

  #buildItemsTemplate() {
    return this.#items.map(this.#buildItemTemplate).join('');
  }

  get #template() {
    return `
      <div class="info-container">
        ${this.#buildItemsTemplate()}
      </div>
    `;
  }

  #render() {
    this.#containerElement.innerHTML = this.#template;
  }

  #removeSkelons() {
    this.#containerElement
      .querySelectorAll('.skelon')
      .forEach((el) => el.classList.remove('skelon'));
  }

  displayData() {
    if (!this.#apiData) throw new ApiDataNotDefinedError();
    this.#items.forEach((item) => {
      const valueId = toCamelCase(item.label);
      this.#containerElement.querySelector(`#${valueId}`).textContent =
        this.#getFormatedValue(item);
    });
    this.#removeSkelons();
  }
}
