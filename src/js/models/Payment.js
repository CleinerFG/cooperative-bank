import { Event } from "./Event.js";

export class Payment extends Event {
  #creditor;
  constructor(eventID, dueDate, value, creditor) {
    super(eventID, dueDate, value);
    this.#creditor = creditor;
  }
  get creditor() {
    return this.#creditor;
  }
}
