import { Event } from "./Event.js";

export class Investment extends Event {
  #investmentType;
  constructor(eventID, dueDate, value, investmentType) {
    super(eventID, dueDate, value);
    this.#investmentType = investmentType;
  }

  get investmentType() {
    return this.#investmentType;
  }
}
