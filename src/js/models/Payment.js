import { Event } from "./Event.js";

export class Payment extends Event {
  constructor(dueDate, value, creditor) {
    super("Payment", dueDate, value);
    this.creditor = creditor;
  }
}
