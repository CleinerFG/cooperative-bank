import { monetaryValue } from "../utils/formatters.js";

export class Event {
  static descType = {
    1: "payment",
    2: "investment",
  };
  #id;
  #type;
  #dueDate;
  #value;
  constructor(id, type, dueDate, value) {
    this.#id = id;
    this.#type = type;
    this.#dueDate = dueDate;
    this.#value = value;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return Event.descType[this.#type];
  }

  get dueDate() {
    return this.#dueDate;
  }

  get value() {
    return monetaryValue(this.#value);
  }
}
