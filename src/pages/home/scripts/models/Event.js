import { monetaryValue } from "../../../../js/utils/formatters.js";

export class Event {
  static descType = {
    1: "payment",
    2: "investment",
  };
  #id;
  #type;
  #dueDate;
  #value;
  constructor(params) {
    this.#id = params.id;
    this.#type = params.type;
    this.#dueDate = params.dueDate;
    this.#value = params.value;
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
