export class EventView {
  constructor(event, parentNode) {
    this._event = event;
    this._parentNode = parentNode;
  }

  get event() {
    return this._event;
  }

  set event(value) {
    this._event = value;
  }

  get parentNode() {
    return this._parentNode;
  }

  set parentNode(value) {
    this._parentNode = value;
  }

  render() {
    this.parentNode.insertAdjacentHTML("afterbegin", this.event.getHtmlStr());
  }
}
