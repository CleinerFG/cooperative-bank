import { ComponentGroupCtrl } from "../../../../js/controllers/ComponentGroupCtrl.js";
import { EventCtrl } from "./EventCtrl.js";

export class EventGroupCtrl extends ComponentGroupCtrl {
  constructor() {
    const container = document.querySelector(".section.events");
    super(container);
  }

  get _ComponentCtrlClass() {
    return EventCtrl;
  }

  get _category() {
    return "events";
  }

  get _endpoint() {
    return "events";
  }

  get _endpointConfig() {
    return [
      { name: "payment", endpoint: "events/payment" },
      { name: "investment", endpoint: "events/investment" },
    ];
  }

  get _emptyCardsTexts() {
    return [
      "There are no events...",
      "When there is news, we'll let you know ; )",
    ];
  }
}
