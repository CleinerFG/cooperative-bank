export class ComponentView {
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
    // this.#container.insertAdjacentHTML(
    //   "afterbegin",
    //   this.#component.getHtmlStr()
    // );
  }
}
