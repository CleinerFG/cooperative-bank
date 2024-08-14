import { insertHtml } from "../utils/dom/insertHtml.js";
import { Event } from "../models/Event.js";

class CardData {
  constructor(dataObject, parentNode) {
    if (!(dataObject instanceof Event)) {
      throw new Error("Object is not an instance of Event");
    }
    this.dataObject = dataObject;
    this.parentNode = parentNode;
  }

  render(position) {
    insertHtml(this.parentNode, position, this.dataObject.getHtmlStr());
  }
}
