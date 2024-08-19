export class Event {
  #id;
  #dueDate;
  #value;
  constructor(id, dueDate, value) {
    this.#id = id;
    this.#dueDate = dueDate;
    this.#value = value;
  }

  get id() {
    return this.#id;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get value() {
    return this.#value;
  }
}
