import { EventPaymentView } from "./EventPaymentView.js";

export class EventInvestmentView extends EventPaymentView {
  get _cssClass() {
    return `event__investment`;
  }

  get _cardFooterTemplate() {
    return `
      <button class="btn btn-attention card-data__btn">
      See
      </button>
    `;
  }
}
