import {
  numberToCurrency,
  formatDate,
} from '../../../../../global/js/utils/formatters.js';

export class EventModel {
  static descType = {
    1: 'payment',
    2: 'investment',
  };
  #id;
  #description;
  #type;
  #dueDate;
  #value;
  constructor(params) {
    this.#id = params.id;
    this.#description = params.description;
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

  get description() {
    return this.#description;
  }

  get dueDate() {
    return formatDate(this.#dueDate);
  }

  get value() {
    return numberToCurrency(this.#value);
  }
}
