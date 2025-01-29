import { ApiService } from '../../../../../global/js/service/ApiService.js';
import { numberToCurrency } from '../../../../../global/js/utils/formatters.js';
import { AssetManager } from '../../../../../global/js/core/AssetManager.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';

/**
 * Manages the display of the account amount on the page.
 * Handles fetching amount, formatting it, and toggling the visibility.
 */
export default class AccountAmount {
  #endpoint = 'account/amount';
  #amountValue;

  constructor() {
    this.#init();
  }

  get #btnVisibilityElement() {
    return document.getElementById('amount-visibility-btn');
  }

  get #spanAmountElement() {
    return document.getElementById('span-amount');
  }

  get #iconElement() {
    return document.getElementById('amount-visibility-icon');
  }

  /**
   * @type {"on" | "off"}
   */
  get #currentVisibility() {
    return this.#btnVisibilityElement.dataset.visibility;
  }

  async #fetchAmount() {
    this.#spanAmountElement.classList.add('skelon');
    await simulateWait();
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
        : 'R$ * * * * * *';
  }

  #toggleVisibility() {
    this.#updateAmountVisibility();
    this.#updateIconVisibility();
    this.#showAmount();
  }

  #setListeners() {
    this.#btnVisibilityElement.addEventListener(
      'click',
      this.#toggleVisibility.bind(this)
    );
  }

  /**
   * @param {"on" | "off"} visibility
   */
  #handleAssets(visibility) {
    AssetManager.updateAsset(
      '#amount-visibility-icon',
      `icon-visibility-${visibility}.svg`
    );
  }

  async #init() {
    await this.#fetchAmount();
    this.#setListeners();
  }
}
