export class DisplayView {
  #container;
  #component;
  constructor(container, component) {
    this.#container = container;
    this.#component = component;
  }

  get component() {
    return this.#component;
  }

  get container() {
    return this.#container;
  }

  render() {
    throw new Error("Must be implemented in the subclass")
  }
}
