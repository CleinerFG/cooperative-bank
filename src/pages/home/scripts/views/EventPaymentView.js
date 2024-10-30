import { ComponentView } from "../../../../js/views/ComponentView.js";
import { capitalize } from "../../../../js/utils/stringUtils.js";

export class EventPaymentView extends ComponentView {
  get _cssId() {
    return `event-${this.componentModel.id}`;
  }

  get _cssClass() {
    return `event__payment`;
  }

  get _cardItemsTemplate() {
    return [
      { label: "Due Date", value: this.componentModel.dueDate },
      { label: "Value", value: this.componentModel.value },
    ];
  }

  get _cardHeaderTemplate() {
    return capitalize(this.componentModel.description);
  }

  get _cardFooterTemplate() {
    return `
      <button class="btn btn-attention card-data__btn">
      Pay
      </button>
    `;
  }
}
