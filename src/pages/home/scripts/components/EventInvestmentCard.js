import { EventPaymentCard } from "./EventPaymentCard.js";

export class EventInvestmentCard extends EventPaymentCard {
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
