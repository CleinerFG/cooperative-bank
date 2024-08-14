import { insertHtml } from "../utils/dom/insertHtml.js";
import { Event } from "../models/Event.js";

const inv = new Investment("10/05/2024", 500, "CDI");

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
