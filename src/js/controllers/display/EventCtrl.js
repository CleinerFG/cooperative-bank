import { DisplayCtrl } from "./DisplayCtrl.js";
import { EventView } from "../../views/display/EventView.js";

export class EventCtrl extends DisplayCtrl {
  constructor(container) {
    super(container, EventView);
  }
  
  removeComponent(eventID) {
    super._removeComponent("event", eventID);
  }
}
