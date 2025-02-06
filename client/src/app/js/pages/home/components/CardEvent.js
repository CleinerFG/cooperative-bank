import { Card } from '../../../../js/components/Card.js';
import { capitalize } from '../../../../../global/js/utils/stringUtils.js';
import {
  formatDate,
  numberToCurrency,
} from '../../../../../global/js/utils/formatters.js';

/**
 * @typedef {object} EventData
 * @property {string} id
 * @property {string} description
 * @property {string} dueDate
 * @property {number} value
 */

/**
 * Represents a card component specifically for displaying event data.
 */
export class CardEvent extends Card {
  /**
   * @type {EventData}
   */
  get _apiData() {
    return super._apiData;
  }

  get _cssId() {
    return `event-${this._index}`;
  }

  get _cssClass() {
    return `event`;
  }

  get _itemsArray() {
    return [
      { label: 'Due Date', value: formatDate(this._apiData.dueDate) },
      { label: 'Value', value: numberToCurrency(this._apiData.value) },
    ];
  }

  get _headerTemplate() {
    return capitalize(this._apiData.description);
  }

  get _footerTemplate() {
    return `
      <button class="btn btn-attention card-data__btn">
      See
      </button>
    `;
  }

  /**
   * Handles modal behavior.
   * In this case, it does not open a modal.
   * @note The modal for the cardEvent is still to be built.
   */
  _handleModal() {
    return false;
  }
}
