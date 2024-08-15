import { insertHtml } from "../utils/dom/insertHtml.js";
import { Event } from "../models/Event.js";

export class EventView {
  constructor(event, parentNode) {
    if (!(event instanceof Event)) {
      throw new Error("Object is not an instance of Event");
    }
    this.event = event;
    this.parentNode = parentNode;
  }

  render(position) {
    insertHtml(this.parentNode, position, this.event.getHtmlStr());
  }
}
