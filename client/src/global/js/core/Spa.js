import { AbstractMethodError } from '../errors/AbstractErrors.js';

export class Spa {
  _setup() {
    throw new AbstractMethodError();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this._setup();
    });
  }
}
