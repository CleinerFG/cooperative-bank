import accountService from '../../../services/AccountService.js';
import { numberToCurrency } from '../../../../../global/js/utils/formatters.js';
import { AssetManager } from '../../../../../global/js/core/AssetManager.js';
import { simulateWait } from '../../../../../global/js/utils/tests.js';

export default class AccountBalance {
  #balanceValue;

  constructor() {
    this.#init();
  }

  get #btnVisibilityElement() {
    return document.getElementById('balance-visibility-btn');
  }

  get #spanBalanceElement() {
    return document.getElementById('balance-value');
  }

  get #iconElement() {
    return document.getElementById('balance-visibility-icon');
  }

  /**
   * @type {"on" | "off"}
   */
  get #currentVisibility() {
    return this.#btnVisibilityElement.dataset.visibility;
  }

  async #fetchData() {
    try {
      await simulateWait();
      this.#balanceValue = await accountService.getBalance();
      this.#spanBalanceElement.classList.remove('skelon');
    } catch (e) {
      console.error(e);
    }
  }

  #updateBalanceVisibility() {
    this.#btnVisibilityElement.dataset.visibility =
      this.#currentVisibility === 'on' ? 'off' : 'on';
  }

  #updateIconVisibility() {
    this.#updateIcon(this.#currentVisibility);
    const alt = this.#currentVisibility === 'on' ? 'Opened eye' : 'Closed eye';
    this.#iconElement.setAttribute('alt', alt);
  }

  #showBalanceValue() {
    this.#spanBalanceElement.textContent =
      this.#currentVisibility === 'on'
        ? numberToCurrency(this.#balanceValue)
        : 'R$ * * * * * *';
  }

  #toggleVisibility() {
    this.#updateBalanceVisibility();
    this.#updateIconVisibility();
    this.#showBalanceValue();
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
  #updateIcon(visibility) {
    AssetManager.updateAsset(
      '#balance-visibility-icon',
      `icon-visibility-${visibility}.svg`
    );
  }

  async #init() {
    await this.#fetchData();
    this.#setListeners();
  }
}
