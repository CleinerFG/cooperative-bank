import { Event } from "./Event.js";

export class Investment extends Event {
  #investmentType;
  constructor(id, dueDate, value, investmentType) {
    super(id, dueDate, value);
    this.#investmentType = investmentType;
  }

  get investmentType() {
    return this.#investmentType;
  }
}
