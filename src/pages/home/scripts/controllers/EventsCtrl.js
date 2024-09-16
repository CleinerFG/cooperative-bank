import { ComponentCtrl } from "../../../../js/controllers/ComponentCtrl.js";
import { EventView } from "../views/EventView.js";

export class EventsCtrl extends ComponentCtrl {
  constructor() {
    const container = document.querySelector(".events__cards");
    super(container, EventView, "event");
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    this.noComponentsCtrl.defineTexts(t1, t2);
  }
}
