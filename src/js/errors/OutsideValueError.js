export class OutsideValueError extends Error {
  constructor(inputName) {
    super(`The ${inputName} can't be outside the list`)
  }
}