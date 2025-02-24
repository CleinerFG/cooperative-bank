import '../../types/infoDataDisplayType.js';
import { ProgressBar } from './progressBar.js';
import { AssetManager } from '../../../../global/js/core/AssetManager.js';
import { handleIconDark } from '../../../../global/js/utils/themeUtils.js';
import {
  toCamelCase,
  capitalize,
} from '../../../../global/js/utils/stringUtils.js';
import {
  formatCpf,
  formatDate,
  numberToCurrency,
  numberToPercent,
} from '../../../../global/js/utils/formatters.js';
import { ApiDataNotDefinedError } from '../../errors/ApiDataNotDefinedError.js';

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
   * @param {Item} param
   */
  #buildItem({ label, iconPath, iconState }) {
    const id = toCamelCase(label);
    const hasIcon = () => {
      if (iconState) {
        return `
          <div class="icon-state skelon">
            <img id="${id}-icon" class="info-icon">
          </div>`;
      } else if (iconPath) {
        return `<img id="${id}-icon" class="icon info-icon ${handleIconDark()}" src="${AssetManager.iconsPath}${iconPath}">`;
      }
      return '';
    };
    return `
      <div class="info-item__container">
        ${hasIcon()}
        <div class="info-item">
          <span class="info-label">${capitalize(label)}</span>
          <span id="${id}" class="info-value skelon"></span>
        </div>
      </div>
    `;
  }

  /**
   * @param {Item} param
   */
  #buildProgressBar({ label }) {
    const progressBarInstance = new ProgressBar(this.#containerElement, label);
    this.#items = this.#items.map((item) => {
      return item.label === label
        ? {
            ...item,
            progressBar: { ...item.progressBar, instance: progressBarInstance },
          }
        : item;
    });
    return progressBarInstance.template;
  }

  /**
   * @param {Item} item
   */
  #buildItemByType(item) {
    return item.progressBar
      ? this.#buildProgressBar(item)
      : this.#buildItem(item);
  }

  #buildItemsTemplate() {
    return this.#items.map(this.#buildItemByType.bind(this)).join('');
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

  /**
   * @param {Item}
   */
  #displayProgressBar({ progressBar }) {
    console.table(this.#apiData);

    const max = this.#apiData[progressBar.apiDataPropMax];
    const current = this.#apiData[progressBar.apiDataPropCurrent];
    /**
     * @type {ProgressBar}
     */
    const instance = progressBar.instance;
    instance.updateProgress(current, max);
  }

  /**
   * @param {Item}
   */
  #displayItem({ label, apiDataProp, valueFormatter, iconState }) {
    const getFormatedValue = (apiDataProp, valueFormatter) => {
      const formattersMap = {
        capitalize: capitalize,
        percent: numberToPercent,
        currency: numberToCurrency,
        date: formatDate,
        cpf: formatCpf,
      };
      const value = this.#apiData[apiDataProp];
      return valueFormatter ? formattersMap[valueFormatter](value) : value;
    };

    const id = toCamelCase(label);
    const element = this.#containerElement.querySelector(`#${id}`);
    element.textContent = getFormatedValue(apiDataProp, valueFormatter);

    if (iconState) {
      const stateIcon = iconState[this.#apiData[apiDataProp]];
      AssetManager.updateAsset(`#${id}-icon`, stateIcon);
    }
  }

  display() {
    if (!this.#apiData) throw new ApiDataNotDefinedError();
    this.#items.forEach((item) => {
      if (item.progressBar) return this.#displayProgressBar(item);
      return this.#displayItem(item);
    });
    this.#removeSkelons();
  }
}
