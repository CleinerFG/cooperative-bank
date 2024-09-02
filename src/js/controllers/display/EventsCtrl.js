import { ComponentCtrl } from "./ComponentCtrl.js";
import { EventView } from "../../views/display/EventView.js";

export class EventsCtrl extends ComponentCtrl {
  constructor(container, category) {
    super(container, EventView, category);
  }
  
  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    this.noComponentsCtrl.defineTexts(t1, t2);
  }
}
