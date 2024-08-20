import { DisplayView } from "./DisplayView.js";

export class NoEventsView extends DisplayView {
  constructor(container, pathManager) {
    super(container);
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

  #addInfoText(txt) {
    return `<p class="info-text">${txt}</p>`;
  }

  render(...texts) {
    const infoTexts = texts.map((txt) => this.#addInfoText(txt)).join("");
    const htmlStr = `
    <div class="no-events">
      <img class="no-events__img" id="no-events-astronaut">
      <div class="no-events__text">
       ${infoTexts}
      </div>
    </div>
    `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
    this._pathHandler();
  }
}
