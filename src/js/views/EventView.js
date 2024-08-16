export class EventView {
  constructor(event, parentNode) {
    this._event = event;
    this._parentNode = parentNode;
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
