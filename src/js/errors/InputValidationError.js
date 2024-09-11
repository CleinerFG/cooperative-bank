import { capitalize } from "../utils/stringUtils.js";

class InputValidationError extends Error {
  constructor(inputName, message) {
    super(`${capitalize(inputName)} ${message}`);
  }
}

export class EmptyValueError extends InputValidationError {
  constructor(inputName) {
    super(inputName, "can't be empty");
  }
}

export class ZeroValueError extends InputValidationError {
  constructor(inputName) {
    super(inputName, "can't be zero");
  }
}

export class OutsideValueError extends InputValidationError {
  constructor(inputName) {
    super(inputName, "can't be outside the list");
  }
}
