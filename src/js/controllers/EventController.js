import { ComponentController } from "./ComponentController.js";
import { EventView } from "../views/EventView.js";

export class EventController extends ComponentController {
  constructor(container) {
    super(container, EventView);
  }

  _noEventsHandler() {
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    this.noComponentsHandler(t1, t2);
  }

  removeEvent(eventID) {
    this.removeComponent("event", eventID);
  }

  addEvent(event) {
    super._addComponent(event);
  }

  renderEvents() {
    super._renderComponents();
  }

  // clearEvents() {
  //   this._events = [];
  //   this._container.innerHTML = "";
  //   this._noEventsHandler();
  // }
}
