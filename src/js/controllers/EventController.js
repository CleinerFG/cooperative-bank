import { Event } from "../models/Event.js";
import { EventView } from "../views/EventView.js";

export class EventController {
  constructor(container) {
    if (!(container instanceof Element)) {
      throw new Error("Container must be a DOM element");
    }
    this._container = container;
    this._events = [];
  }

  get container() {
    return this._container;
  }

  get events() {
    return this._events;
  }

  _createEventView(event) {
    if (!(event instanceof Event)) {
      throw new Error(`${event} is not an instance of Event`);
    }
    return new EventView(event, this.container);
  }

  _renderEventView(eventView) {
    eventView.render();
  }

  _renderNoEvents() {
    if (!this.events.length) {
      const noEventView = this._createEventView(new Event());
      this._renderEventView(noEventView);
    }
  }

  addEvent(event) {
    const eventView = this._createEventView(event);
    this.events.push(eventView);
  }

  renderAllEvents() {
    this._renderNoEvents();
    this.events.forEach((ev) => this._renderEventView(ev));
  }

  removeEvent(eventID) {
    const element = document.getElementById(`event-${eventID}`);
    element.remove();
    this._events = this._events.filter(
      (eventView) => eventView.event.eventID !== eventID
    );
    this._renderNoEvents();
  }

  clearEvents() {
    this.events = [];
    this.container.innerHTML = "";
  }
}
