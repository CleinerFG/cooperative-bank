import { ApiService } from '../../../service/ApiService.js';
import { numberToCurrency } from '../../../utils/formatters.js';
import { AssetManager } from '../../../core/AssetManager.js';
import { simulateWait } from '../../../../js/utils/tests.js';

/**
 * Manages the display and visibility of the financial statement on the page.
 * Handles fetching financial data, formatting it, and toggling the visibility.
 *
 * @class
 */
export class FinancialStatement {
  /**
   * Container for the component to be rendered.
   *
   * @private
   * @type {HTMLElement}
   */
  #containerElement;

  /**
   * The API endpoint for fetching financial statement data.
   *
   * @private
   * @type {string}
   */
  #endpoint = 'financial-statement';

  /**
   * Initializes a new instance of FinancialStatement, selecting the container element.
   */
  constructor() {
    this.#containerElement = document.querySelector('.statement__container');
    this.#init();
  }

  /**
   * HTML template for the financial statement component, containing the component's container, span, and the icon wrapped in the button.
   *
   * @private
   * @type {string}
   */
  get #template() {
    return `
      <div class="statement__total"><span id="statement-amount" class="statement__amount">R$ ******</span></div>
      <button class="btn-unset statement__visibility-btn" data-visibility="off">
        <img id="visibility-icon" class="icon statement__visibility-icon" alt="Closed eye">
      </button>

    `;
  }

  /**
   * Gets the visibility toggle button element.
   *
   * @private
   * @type {HTMLElement}
   */
  get #visibilityBtnElement() {
    return document.querySelector('.statement__visibility-btn');
  }

  /**
   * Gets the span element showing the amount.
   *
   * @private
   * @type {HTMLElement}
   */
  get #spanAmount() {
    return document.getElementById('statement-amount');
  }

  /**
   * Gets the visibility icon element.
   *
   * @private
   * @type {HTMLElement}
   */
  get #IconElement() {
    return document.querySelector('.statement__visibility-icon');
  }

  /**
   * Gets the current visibility state from the data attribute.
   * @private
   * @type {"on" | "off"}
   */
  get #currentVisibility() {
    return this.#visibilityBtnElement.dataset.visibility;
  }

  /**
   * Fetches the financial statement data from the API.
   *
   * @async
   * @private
   * @returns {Promise<number>} The financial statement value fetched from the API.
   */
  async #fetchFromApi() {
    return await ApiService.fetchFrom(this.#endpoint);
  }

  /**
   * Updates the financial statement display based on the current visibility state.
   * If visibility is off, fetches and formats the value.
   *
   * @async
   * @private
   * @returns {Promise<void>}
   */
  async #updateStatement() {
    let currencyValue = 'R$ ******';
    if (this.#currentVisibility === 'off') {
      this.#spanAmount.classList.add('skelon');
      await simulateWait(2);
      // const value = await this.#fetchFromApi();
      const value = 105465
      this.#spanAmount.classList.remove('skelon');
      currencyValue = numberToCurrency.format(value);
    }
    this.#spanAmount.textContent = currencyValue;
  }

  /**
   * Switches the visibility state.
   *
   * @private
   */
  #switchVisibility() {
    const updatedAlt =
      this.#currentVisibility === 'on' ? 'Closed eye' : 'Opened eye';
    this.#IconElement.setAttribute('alt', updatedAlt);

    const updatedVisibility = this.#currentVisibility === 'off' ? 'on' : 'off';
    this.#iconPathHandler(updatedVisibility);
    this.#visibilityBtnElement.dataset.visibility = updatedVisibility;
  }

  /**
   * Sets up the click event handler for the visibility toggle button.
   *
   * @private
   */
  #btnHandler() {
    this.#visibilityBtnElement.addEventListener('click', () => {
      this.#updateStatement();
      this.#switchVisibility();
    });
  }

  /**
   * Renders the template.
   *
   * @private
   */
  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  /**
   * Updates the visibility icon path based on the current visibility state.
   *
   * @private
   * @param {"on" | "off"} visibility
   */
  #iconPathHandler(visibility) {
    AssetManager.updateIcon(
      '#visibility-icon',
      `icon-visibility-${visibility}.svg`
    );
  }

  /**
   * Initializes the financial statement, rendering the template,
   * setting up the icon, and adding event listeners.
   *
   * @private
   */
  #init() {
    this.#render();
    this.#iconPathHandler('off');
    this.#btnHandler();
  }
}
