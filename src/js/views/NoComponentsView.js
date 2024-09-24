import { PathManager } from "../utils/PathManager.js";

export class NoComponentsView {
  #container;
  #texts;
  #imgId;
  constructor(container) {
    this.#container = container;
    this.#texts = ["There is nothing..."];
    this.#imgId = "no-components-img";
  }

  get texts() {
    return this.#texts;
  }

  set texts(arrTexts) {
    this.#texts = arrTexts;
  }

  get imgId() {
    return this.#imgId;
  }

  set imgId(value) {
    this.#imgId = value;
  }

  defineTexts(...texts) {
    this.#texts = texts;
  }

  #infoTexts() {
    const createTagP = (txt) => `<p class="info-text">${txt}</p>`;
    return this.#texts.map((txt) => createTagP(txt)).join("");
  }

  #createNoEventsContainer() {
    return `
    <div class="no-components">
      <img class="no-components__img" id="${this.#imgId}">
      <div class="no-components__text">
       ${this.#infoTexts()}
      </div>
    </div>
    `;
  }

  render() {
    const noEventsStr = this.#createNoEventsContainer();
    this.#container.insertAdjacentHTML("afterbegin", noEventsStr);
  }

  #randomImgFile() {
    const n = Math.floor(Math.random() * 4) + 1;
    return `astronaut-${n}.svg`;
  }

  #pathHandler() {
    PathManager.updateAsset(`#${this.#imgId}`, this.#randomImgFile());
  }

  init() {
    this.render();
    this.#pathHandler();
  }
}
