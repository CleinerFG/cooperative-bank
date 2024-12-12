/**
 * Error class for handling invalid data.
 * Thrown when the provided data is invalid.
 */
export class InvalidDataError extends Error {
  constructor() {
    super("Invalid Data Error");
  }
}
