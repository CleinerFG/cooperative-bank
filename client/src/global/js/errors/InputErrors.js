export class EmptyValueError extends Error {
  constructor() {
    super('This field cannot be empty');
  }
}

export class ZeroValueError extends Error {
  constructor() {
    super('This field cannot be zero');
  }
}

export class OutsideValueError extends Error {
  constructor() {
    super("The value can't be outside the list");
  }
}

export class NotFoundError extends Error {
  constructor(message = 'No results found') {
    super(message);
  }
}

export class InvalidCpfError extends Error {
  constructor() {
    super('Invalid CPF');
  }
}

export class InvalidPasswordError extends Error {
  constructor(message) {
    super(message);
  }
}

export class InvalidEmailError extends Error {
  constructor() {
    super('Invalid e-mail');
  }
}
