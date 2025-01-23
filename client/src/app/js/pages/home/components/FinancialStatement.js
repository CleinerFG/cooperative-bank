import { ApiService } from '../../../../../global/js/service/ApiService.js';
import { numberToCurrency } from '../../../../../global/js/utils/formatters.js';
import { AssetManager } from '../../../../../global/js/core/AssetManager.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';

/**
 * Manages the display and visibility of the financial statement on the page.
 * Handles fetching financial data, formatting it, and toggling the visibility.
 */
export default class FinancialStatement {
  /**
   * @type {HTMLElement}
   */
  #containerElement;

  #endpoint = 'financial-statement';

  constructor() {
    this.#containerElement = document.querySelector('.statement-container');
    this.#init();
  }

  get #template() {
    return `
      <div class="statement__total"><span id="statement-amount" class="statement-amount">R$ ******</span></div>
      <button id="amount-visibility-btn" class="btn-unset visibility-btn" data-visibility="off">
        <img id="visibility-icon" class="icon visibility-icon" alt="Closed eye">
      </button>

    `;
  }

  get #btnVisibilityElement() {
    return document.querySelector('#amount-visibility-btn');
  }

  get #spanAmountElement() {
    return document.getElementById('statement-amount');
  }

  get #iconElement() {
    return document.querySelector('.statement__visibility-icon');
  }

  /**
   * @type {"on" | "off"}
   */
  get #currentVisibility() {
    return this.#btnVisibilityElement.dataset.visibility;
  }

  async #fetchFromApi() {
    return await ApiService.fetchFrom(this.#endpoint);
  }

  async #updateAmount() {
    let currencyValue = 'R$ ******';
    if (this.#currentVisibility === 'off') {
      this.#spanAmountElement.classList.add('skelon');
      await simulateWait(2);
      const value = await this.#fetchFromApi();
      this.#spanAmountElement.classList.remove('skelon');
      currencyValue = numberToCurrency.format(value);
    }
    this.#spanAmountElement.textContent = currencyValue;
  }

  #toggleVisibility() {
    const updatedAlt =
      this.#currentVisibility === 'on' ? 'Closed eye' : 'Opened eye';
    this.#iconElement.setAttribute('alt', updatedAlt);

    const updatedVisibility = this.#currentVisibility === 'off' ? 'on' : 'off';
    this.#handleAssets(updatedVisibility);
    this.#btnVisibilityElement.dataset.visibility = updatedVisibility;
  }

  #setListeners() {
    this.#btnVisibilityElement.addEventListener('click', () => {
      this.#updateAmount();
      this.#toggleVisibility();
    });
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  /**
   * @param {"on" | "off"} visibility
   */
  #handleAssets(visibility) {
    AssetManager.updateAsset(
      'icon',
      '#visibility-icon',
      `icon-visibility-${visibility}.svg`
    );
  }

  #init() {
    this.#render();
    this.#handleAssets('off');
    this.#setListeners();
  }
}
