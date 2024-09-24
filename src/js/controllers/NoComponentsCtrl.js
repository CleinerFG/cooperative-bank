import { NoComponentsView } from "../views/NoComponentsView.js";
import { PathManager } from "../utils/PathManager.js";

export class NoComponentsCtrl {
  #noComponentsView;
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
    PathManager.updateAsset(`#${imgId}`, this.#imgFile);
  }

  init() {
    this.#noComponentsView.render();
    this.#pathHandler();
  }
}
