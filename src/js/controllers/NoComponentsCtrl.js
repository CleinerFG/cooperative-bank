import { NoComponentsView } from "../views/NoComponentsView.js";
import pathUtil from "../utils/PathManager.js";

export class NoComponentsCtrl {
  #noComponentsView;
  #pathManager = pathUtil;
  #imgFile;
  constructor(container) {
    this.#noComponentsView = new NoComponentsView(container);
    this.#imgFile = this.#randomImgFile();
  }

  #randomImgFile() {
    const n = Math.floor(Math.random() * 4) + 1;
    return `astronaut-${n}.svg`;
  }

  defineTexts(...texts) {
    this.#noComponentsView.texts = texts;
  }

  defineImgId(value) {
    this.#noComponentsView.imgId = value;
  }

  #pathHandler() {
    const imgId = this.#noComponentsView.imgId;
    this.#pathManager.updatePath("asset", `#${imgId}`, "images", this.#imgFile);
  }

  init() {
    this.#noComponentsView.render();
    this.#pathHandler();
  }
}
