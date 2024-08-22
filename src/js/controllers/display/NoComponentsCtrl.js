import { NoComponentsView } from "../../views/display/NoComponentsView.js";
import pathUtil from "../../utils/PathManager.js";

export class NoComponentsCtrl {
  #container;
  #noComponentsView;
  #pathManager;
  #imgFile;
  constructor(container, pathManager = pathUtil) {
    this.#container = container;
    this.#noComponentsView = new NoComponentsView(this.#container);
    this.#pathManager = pathManager;
    this.#imgFile = this.#randomImgFile();
  }

  get imgFile() {
    return this.#imgFile;
  }

  set imgFile(value) {
    this.#imgFile = value;
  }

  #randomImgFile() {
    const n = Math.floor(Math.random() * 4) + 1;
    console.log(n);
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
