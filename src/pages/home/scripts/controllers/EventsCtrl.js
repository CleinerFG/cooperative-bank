import { ComponentsCtrl } from "../../../../js/controllers/ComponentsCtrl.js";
import { EventModel } from "../models/EventModel.js";
import { EventView } from "../views/EventView.js";

export class EventsCtrl extends ComponentsCtrl {
  constructor() {
    const container = document.querySelector(".events__cards");
    super(container, EventView, EventModel, "events");
  }

  get _endpoint() {
    return "events";
  }

  _defineEmptyCardsTexts() {
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    super._defineEmptyCardsTexts(t1, t2);
  }
}
