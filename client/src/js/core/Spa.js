import { AbstractMethodError } from '../errors/AbstractErrors.js';

export default class Spa {
  _setup() {
    throw new AbstractMethodError();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this._setup();
    });
  }
}
