import { CardComponent } from "../../../../js/components/CardComponent.js";
import { EventModel } from "../models/EventModel.js";
import { capitalize } from "../../../../js/utils/stringUtils.js";

/**
 * Represents a card component specifically for displaying event data.
 * Implements abstract methods from `CardComponent` to provide templates and configurations
 * for rendering event-specific details.
 *
 * @class
 * @extends CardComponent
 */
export class CardEvent extends CardComponent {
  /**
   * Returns the model class associated with this card, which is `EventModel`.
   * Used to initialize the model with event-specific data.
   *
   * @protected
   * @returns {EventModel}
   * @override
   */
  get _ModelClass() {
    return EventModel;
  }

  /**
   * Returns the unique CSS ID for the card, based on the event's ID.
   *
   * @protected
   * @returns {string}
   * @override
   */
  get _cssId() {
    return `event-${this._model.id}`;
  }

  /**
   * Returns the CSS class name specific to the event card.
   *
   * @protected
   * @returns {string}
   * @override
   */
  get _cssClass() {
    return `event`;
  }

  /**
   * Provides the items to be displayed in the main content of the card.
   * Each item includes a label and its corresponding value from the model.
   *
   * @protected
   * @returns {Array<{label: string, value: string}>}
   * @override
   */
  get _cardItemsTemplate() {
    return [
      { label: "Due Date", value: this._model.dueDate },
      { label: "Value", value: this._model.value },
    ];
  }

  /**
   * Returns the template for the card's header, which is the capitalized description
   * of the event.
   *
   * @protected
   * @returns {string}
   * @override
   */
  get _cardHeaderTemplate() {
    return capitalize(this._model.description);
  }

  /**
   * Returns the template for the card's footer, which includes an action button.
   *
   * @protected
   * @returns {string}
   * @override
   */
  get _cardFooterTemplate() {
    return `
      <button class="btn btn-attention card-data__btn">
      See
      </button>
    `;
  }

  /**
   * Handles modal behavior.
   * In this case, it does not open a modal.
   *
   * @protected
   * @returns {boolean}
   * @override
   *
   * @note The modal for the cardEvent is still to be built.
   */
  _modalHandler() {
    return false;
  }
}
