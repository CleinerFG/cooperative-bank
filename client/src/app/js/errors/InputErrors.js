export class EmptyValueError extends Error {
  constructor() {
    super("This field cannot be empty");
  }
}

export class ZeroValueError extends Error {
  constructor() {
    super("This field cannot be zero");
  }
}

export class OutsideValueError extends Error {
  constructor() {
    super("The value can't be outside the list");
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("No results found");
  }
}
