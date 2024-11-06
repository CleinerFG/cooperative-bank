import {
  numberToCurrency,
  formatDate,
} from "../../../../js/utils/formatters.js";

export class EventModel {
  static descType = {
    1: "payment",
    2: "investment",
  };
  #id;
  #name;
  #type;
  #dueDate;
  #value;
  constructor(params) {
    this.#id = params.id;
    this.#name = params.name;
    this.#type = params.type;
    this.#dueDate = params.dueDate;
    this.#value = params.value;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return EventModel.descType[this.#type];
  }

  get description(){
    return "Must be implemented"
  }

  get dueDate() {
    return formatDate.format(new Date(this.#dueDate));
  }

  get value() {
    return numberToCurrency.format(this.#value);
  }
}
