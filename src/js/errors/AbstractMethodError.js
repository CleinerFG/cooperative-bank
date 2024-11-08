/**
 * Error class for unimplemented abstract methods.
 * Thrown when a subclass does not implement a required method.
 */
export class AbstractMethodError extends Error {
  /**
   * Creates an instance of AbstractMethodError with a message indicating
   * that a method must be implemented in the subclass.
   *
   * @param {string} [methodName="Method"] - The name of the method that was not implemented.
   */
  constructor(methodName = "Method") {
    super(`${methodName} must be implemented in the subclass`);
  }
}
