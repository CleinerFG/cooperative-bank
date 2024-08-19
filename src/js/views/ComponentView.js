export class ComponentView {
  constructor(parentNode, component) {
    this._parentNode = parentNode;
    this._component = component;
  }

  get component() {
    return this._component;
  }

  get parentNode() {
    return this._parentNode;
  }

  render() {
    this._parentNode.insertAdjacentHTML("afterbegin", this._component.getHtmlStr());
  }
}
