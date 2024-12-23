import { CardComponent } from '../../../../js/components/CardComponent.js';
import { EventModel } from '../models/EventModel.js';
import { capitalize } from '../../../../js/utils/stringUtils.js';

/**
 * Represents a card component specifically for displaying event data.
 */
export class CardEvent extends CardComponent {
  get _ModelClass() {
    return EventModel;
  }

  get _id() {
    return `event-${this._model.id}`;
  }

  get _cssClass() {
    return `event`;
  }

  get _itemsArray() {
    return [
      { label: 'Due Date', value: this._model.dueDate },
      { label: 'Value', value: this._model.value },
    ];
  }

  get _headerTemplate() {
    return capitalize(this._model.description);
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
