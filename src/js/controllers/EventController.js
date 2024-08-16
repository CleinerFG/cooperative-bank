import { EventView } from "../views/EventView.js";
import { NoEventsView } from "../views/NoEventsView.js";
import pathManager from "../utils/PathManager.js";

export class EventController {
  constructor(container) {
    this._container = container;
    this._events = [];
    this._pathManager = pathManager;
  }

  _createEventView(event) {
    return new EventView(event, this._container);
  }

  _createNoEventsView() {
    return new NoEventsView(this._container, this._pathManager);
  }

  _renderEventView(eventView) {
    eventView.render();
  }

  _noEventsHandler() {
    if (!this._events.length) {
      const noEventView = this._createNoEventsView();
      noEventView.render();
    }
  }

  addEvent(event) {
    const eventView = this._createEventView(event);
    this._events.push(eventView);
  }

  renderEvents() {
    this._noEventsHandler();
    this._events.forEach((ev) => this._renderEventView(ev));
  }

  removeEvent(eventID) {
    const element = document.getElementById(`event-${eventID}`);
    element.remove();
    this._events = this._events.filter(
      (eventView) => eventView.event.eventID !== eventID
    );
    this._noEventsHandler();
  }

  clearEvents() {
    this._events = [];
    this._container.innerHTML = "";
    this._noEventsHandler();
  }
}
