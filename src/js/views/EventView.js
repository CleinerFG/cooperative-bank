import { Event } from "../models/Event.js";

export class EventView {
  constructor(event, parentNode) {
    if (!(event instanceof Event)) {
      throw new Error("Object is not an instance of Event");
    }
    this._event = event;
    this._parentNode = parentNode;
  }

  get event() {
    return this._event;
  }

  set event(value) {
    this._event = value;
  }

  get parentNode() {
    return this._parentNode;
  }

  set parentNode(value) {
    this._parentNode = value;
  }

  render() {
    this.parentNode.insertAdjacentHTML("afterbegin", this.event.getHtmlStr());
  }
}
