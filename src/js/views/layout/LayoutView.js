export class LayoutView {
  #htmlStr;
  #body;
  constructor(htmlStr) {
    this.#htmlStr = htmlStr;
    this.#body = document.body;
  }

  get htmlStr() {
    return this.#htmlStr;
  }

  get body() {
    return this.#body;
  }

  render() {
    throw new Error("Must be implemented in the subclass");
  }
}
