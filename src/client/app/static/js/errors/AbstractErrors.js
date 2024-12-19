export class AbstractGetterError extends Error {
  /**
   * @param {string} [getterName="Getter"]
   */
  constructor(getterName = 'Getter') {
    super(`${getterName} must be implemented in the subclass`);
  }
}

export class AbstractMethodError extends Error {
  /**
   * @param {string} [methodName="Method"]
   */
  constructor(methodName = 'Method') {
    super(`${methodName} must be implemented in the subclass`);
  }
}
