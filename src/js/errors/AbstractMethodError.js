export class AbstractMethodError extends Error {
  constructor(methodName = "Method") {
    super(`${methodName} must be implemented in the subclass`);
  }
}
