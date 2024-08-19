import { Event } from "./Event.js";

export class Payment extends Event {
  constructor(eventID, dueDate, value, creditor) {
    super("Payment", eventID, dueDate, value);
    this._creditor = creditor;
  }
}
