import { ComponentCtrl } from "../../../../js/controllers/ComponentCtrl.js";
import { EventModel } from "../models/EventModel.js";
import { EventView } from "../views/EventView.js";

export class EventCtrl extends ComponentCtrl {
  get _ModelClass() {
    return EventModel;
  }

  get _ViewClass() {
    return EventView;
  }
}
