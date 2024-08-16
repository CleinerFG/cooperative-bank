import { Event } from "../models/Event.js";
import { EventView } from "./EventView.js";

export class NoEventsView extends EventView {
  constructor(parentNode, pathManager) {
    super(null, parentNode);
    this._pathManager = pathManager;
  }

  _pathHandler() {
    this._pathManager.updatePath(
      "asset",
      "#no-events-astronaut",
      "images",
      "astronaut.svg"
    );
  }

  render() {
    this.parentNode.insertAdjacentHTML("afterbegin", new Event().getHtmlStr());
    this._pathHandler();
  }
}
