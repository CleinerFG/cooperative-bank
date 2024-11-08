/**
 * Error class for empty value validation.
 * Thrown when a field is empty.
 */
export class EmptyValueError extends Error {
  constructor() {
    super("This field cannot be empty");
  }
}

/**
 * Error class for zero value validation.
 * Thrown when a field value is zero.
 */
export class ZeroValueError extends Error {
  constructor() {
    super("This field cannot be zero");
  }
}

/**
 * Error class for validation of values outside a valid list.
 * Thrown when a value is not in the allowed list.
 */
export class OutsideValueError extends Error {
  constructor() {
    super("The value can't be outside the list");
  }
}

/**
 * Error class for when no results are found.
 * Thrown when no matching results are found.
 */
export class NotFoundError extends Error {
  constructor() {
    super("No results found");
  }
}
