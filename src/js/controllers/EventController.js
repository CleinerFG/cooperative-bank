import { Event } from "../models/Event.js";
import { EventView } from "../views/EventView.js";

export class EventController {
  constructor(container) {
    if (!(container instanceof Element)) {
      throw new Error("Container must be a DOM element");
    }
    this.container = container;
    this.events = [];
  }

  createEventView(event) {
    if (!(event instanceof Event)) {
      throw new Error(`${event} is not an instance of Event`);
    }
    return new EventView(event, this.container);
  }

  addEvent(event) {
    const eventView = this.createEventView(event);
    this.events.push(eventView);
  }

  renderEvent(eventView) {
    eventView.render("afterbegin");
  }

  renderAllEvents() {
    if (!this.events.length) {
      const withoutEv = this.createEventView(new Event());
      this.renderEvent(withoutEv);
      return;
    }
    this.events.forEach((ev) => this.renderEvent(ev));
  }

  removeEvent(event) {
    this.events = this.events.filter(
      (eventView) => eventView.dataObject !== event
    );
    this.container.innerHTML = "";
    this.renderAllEvents();
  }

  clearEvents() {
    this.events = [];
    this.container.innerHTML = "";
  }
}
