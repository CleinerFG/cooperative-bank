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
  #amountValue;

  constructor() {
    this.#containerElement = document.querySelector('.amount-container');
    this.#init();
  }

  get #template() {
    return `
      <div class="statement__total"><span id="span-amount" class="span-amount">R$ ******</span></div>
      <button id="amount-visibility-btn" class="btn-unset visibility-btn" data-visibility="off">
        <img id="visibility-icon" class="icon visibility-icon" alt="Closed eye">
      </button>

    `;
  }

  get #btnVisibilityElement() {
    return document.querySelector('#amount-visibility-btn');
  }

  get #spanAmountElement() {
    return document.getElementById('span-amount');
  }

  get #iconElement() {
    return document.querySelector('.statement .visibility-icon');
  }

  /**
   * @type {"on" | "off"}
   */
  get #currentVisibility() {
    return this.#btnVisibilityElement.dataset.visibility;
  }

  async #fetchAmount() {
    this.#spanAmountElement.classList.add('skelon');
    await simulateWait(2);
    this.#amountValue = await ApiService.fetchFrom(this.#endpoint);
    this.#spanAmountElement.classList.remove('skelon');
  }

  #updateAmountVisibility() {
    this.#btnVisibilityElement.dataset.visibility =
      this.#currentVisibility === 'on' ? 'off' : 'on';
  }

  #updateIconVisibility() {
    this.#handleAssets(this.#currentVisibility);
    const alt = this.#currentVisibility === 'on' ? 'Opened eye' : 'Closed eye';
    this.#iconElement.setAttribute('alt', alt);
  }

  #showAmount() {
    this.#spanAmountElement.textContent =
      this.#currentVisibility === 'on'
        ? numberToCurrency.format(this.#amountValue)
        : 'R$ ******';
  }

  #toggleVisibility() {
    this.#updateAmountVisibility();
    this.#updateIconVisibility();
    this.#showAmount();
  }

  #setListeners() {
    this.#btnVisibilityElement.addEventListener('click', () => {
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

  async #init() {
    this.#render();
    this.#handleAssets('off');
    await this.#fetchAmount();
    this.#setListeners();
  }
}
