import { DisplayCtrl } from "./DisplayCtrl.js";
import { EventView } from "../../views/display/EventView.js";

export class EventCtrl extends DisplayCtrl {
  constructor(container) {
    super(container, EventView);
  }
  _defineNoComponentsSettings() {
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    this.noComponentsCtrl.defineTexts(t1, t2);
  }
}
