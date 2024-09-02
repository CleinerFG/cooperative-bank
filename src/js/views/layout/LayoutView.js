import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class LayoutView {
  #htmlStr;
  #body = document.body;
  constructor(htmlStr) {
    this.#htmlStr = htmlStr;
  }

  get htmlStr() {
    return this.#htmlStr;
  }

  get body() {
    return this.#body;
  }

  render() {
    throw new AbstractMethodError("render");
  }
}
