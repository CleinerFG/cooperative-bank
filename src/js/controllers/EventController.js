import { ComponentController } from "./ComponentController.js";
import { EventView } from "../views/EventView.js";

export class EventController extends ComponentController {
  constructor(container) {
    super(container, EventView);
  }

  _noComponentsHandler() {
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    super._noComponentsHandler(t1, t2);
  }

  addEvent(event) {
    super._addComponent(event);
  }

  renderEventView(eventView) {
    super._renderComponentView(eventView);
  }

  renderEvents() {
    super._renderComponents();
  }

  removeEvent(eventID) {
    super._removeComponent("event", eventID);
  }

  clearEvents() {
    super._clearComponents();
  }
}
