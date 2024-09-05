export class InputValidationError extends Error {
  #inputId;
  constructor(message, inputId) {
    super(message);
    this.#inputId = inputId;
  }

  get inputId() {
    return this.#inputId;
  }
}
