const eventTypes = {
  1: "payment",
  2: "investment",
};

export class Event {
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

  // Implement data formatting from the server in the getters

  get id() {
    return this.#id;
  }

  get type() {
    return eventTypes[this.#type];
  }

  get dueDate() {
    return this.#dueDate;
  }

  get value() {
    return this.#value;
  }
}
