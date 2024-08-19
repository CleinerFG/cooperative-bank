export class ComponentView {
  #parentNode;
  #component;
  constructor(parentNode, component) {
    this.#parentNode = parentNode;
    this.#component = component;
  }

  get component() {
    return this.#component;
  }

  get parentNode() {
    return this.#parentNode;
  }

  render() {
    // this.#parentNode.insertAdjacentHTML(
    //   "afterbegin",
    //   this.#component.getHtmlStr()
    // );
  }
}
