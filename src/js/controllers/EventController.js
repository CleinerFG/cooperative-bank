import { Event } from "../models/Event.js";
import { CardData } from "../views/CardData.js";

export class EventController {
  constructor(container) {
    if (!(container instanceof Element)) {
      throw new Error("Container must be a DOM element");
    }
    this.container = container;
    this.cardDataInstances = [];
  }

  isEventInstance(event) {
    return event instanceof Event;
  }

  createCardDataInstance(event) {
    if (!this.isEventInstance(event)) {
      throw new Error(`${event} is not an instance of Event`);
    }
    return new CardData(event, this.container);
  }

  addEvent(event) {
    try {
      const cardDataInstance = this.createCardDataInstance(event);
      this.cardDataInstances.push(cardDataInstance);
      return cardDataInstance;
    } catch (error) {
      console.log(error.message);
    }
  }

  renderEvent(event) {
    const cardDataInstance = this.addEvent(event);
    cardDataInstance.render("afterbegin");
  }

  renderAllEvents() {
    this.cardDataInstances.forEach((card) => card.render("afterbegin"));
  }

  removeEvent(event) {
    this.cardDataInstances = this.cardDataInstances.filter(
      (card) => card.dataObject !== event
    );
    this.container.innerHTML = "";
    this.renderAllEvents();
  }

  clearEvents() {
    this.cardDataInstances = [];
    this.container.innerHTML = "";
  }
}
