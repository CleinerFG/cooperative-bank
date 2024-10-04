import { numberToCurrency } from "../../../../js/utils/formatters.js";

export class EventModel {
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
    return EventModel.descType[this.#type];
  }

  get dueDate() {
    return this.#dueDate;
  }

  get value() {
    return numberToCurrency(this.#value);
  }
}
