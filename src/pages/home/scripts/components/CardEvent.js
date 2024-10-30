import { CardComponent } from "../../../../js/components/CardComponent.js";
import { EventModel } from "../models/EventModel.js";
import { capitalize } from "../../../../js/utils/stringUtils.js";

export class CardEvent extends CardComponent {
  get _ModelClass() {
    return EventModel;
  }

  get _cssId() {
    return `event-${this._model.id}`;
  }

  get _cssClass() {
    return `event`;
  }

  get _cardItemsTemplate() {
    return [
      { label: "Due Date", value: this._model.dueDate },
      { label: "Value", value: this._model.value },
    ];
  }

  get _cardHeaderTemplate() {
    return capitalize(this._model.description);
  }

  get _cardFooterTemplate() {
    return `
      <button class="btn btn-attention card-data__btn">
      See
      </button>
    `;
  }
}
