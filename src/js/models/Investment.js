import { Event } from "./Event.js";

export class Investment extends Event {
  constructor(eventID, dueDate, value, investmentType) {
    super("Investment", eventID, dueDate, value);
    this._investmentType = investmentType;
  }

  get investmentType() {
    return this._investmentType;
  }
}
