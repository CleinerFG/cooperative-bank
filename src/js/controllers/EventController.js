import { Event } from "../models/Event.js";
import { CardData } from "../views/CardData.js";

export class EventController {
  constructor(container) {
    this.container = container;
    this.cardDataInstances = [];
  }

  isEventInstance(event) {
    return event instanceof Event;
  }

  createCardDataInstance(event) {
    return new CardData(event, this.container);
  }

  addEvent(event) {
    if (!this.isEventInstance(event)) {
      console.log(`${event} - Isn't an instance of Event`);
      return;
    }
    const cardDataInstance = this.createCardDataInstance(event);
    this.cardDataInstances.push(cardDataInstance);
  }

  renderEvent(event) {
    if (!this.isEventInstance(event)) {
      console.log(`${event} - Isn't an instance of Event`);
      return;
    }
    const cardDataInstance = this.createCardDataInstance(event);
    cardDataInstance.render("beforeend");
  }

  renderAllEvents() {
    this.cardDataInstances.forEach((card) => {
      card.render("beforeend");
    });
  }
}
