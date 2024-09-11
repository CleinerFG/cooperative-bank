export class ZeroValueError extends Error {
  constructor(inputName) {
    super(`The ${inputName} can't be zero`)
  }
}