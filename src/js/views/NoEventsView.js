import { ComponentView } from "./ComponentView.js";

export class NoEventsView extends ComponentView {
  constructor(parentNode, pathManager) {
    super(parentNode);
    this._pathManager = pathManager;
  }

  _pathHandler() {
    this._pathManager.updatePath(
      "asset",
      "#no-events-astronaut",
      "images",
      "astronaut.svg"
    );
  }

  render(text1, text2) {
    const htmlStr = `
    <div class="no-events">
      <img class="no-events__img" id="no-events-astronaut">
      <div class="no-events__text">
        <p class="info-text">${text1}</p>
        <p class="info-text">${text2}</p>
      </div>
    </div>
    `;
    this.parentNode.insertAdjacentHTML("afterbegin", htmlStr);
    this._pathHandler();
  }
}
