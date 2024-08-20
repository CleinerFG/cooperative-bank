import { Event } from "./display/Event.js";

export class Payment extends Event {
  #creditor;
  constructor(id, dueDate, value, creditor) {
    super(id, dueDate, value);
    this.#creditor = creditor;
  }
  get creditor() {
    return this.#creditor;
  }
}
