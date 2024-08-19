import { ComponentController } from "./ComponentController.js";
import { EventView } from "../views/EventView.js";

export class EventController extends ComponentController {
  constructor(container) {
    super(container, EventView);
  }

  _noEventsHandler() {
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    this._noComponentsHandler(t1, t2);
  }

  removeEvent(eventID) {
    this._removeComponent("event", eventID);
  }

  // clearEvents() {
  //   this._events = [];
  //   this._container.innerHTML = "";
  //   this._noEventsHandler();
  // }
}
