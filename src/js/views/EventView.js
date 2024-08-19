export class EventView {
  constructor(parentNode, event) {
    this._parentNode = parentNode;
    this._event = event;
  }

  get event() {
    return this._event;
  }

  get parentNode() {
    return this._parentNode;
  }

  render() {
    this._parentNode.insertAdjacentHTML("afterbegin", this.event.getHtmlStr());
  }
}
