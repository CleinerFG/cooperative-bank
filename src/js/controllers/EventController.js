import { ComponentController } from "./ComponentController.js";
import { EventView } from "../views/EventView.js";

export class EventController extends ComponentController {
  #type;
  constructor(container, type) {
    super(container, EventView);
    this.#type = type;
  }

  _noComponentsHandler() {
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    super._noComponentsHandler(t1, t2);
  }

  renderComponent(view) {
    view.render(this.#type);
  }

  removeComponent(eventID) {
    super._removeComponent("event", eventID);
  }
}
