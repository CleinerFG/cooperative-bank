export class EmptyValueError extends Error {
  constructor(inputName) {
    console.log("inputname: ", inputName);
    super(`The ${inputName} can't be empty`);
  }
}
