import { StatementView } from "../../views/display/StatementView.js";
import pathUtil from "../../utils/PathManager.js";

export class StatementCtrl {
  #container;
  #pathManager;
  constructor(container) {
    this.#container = container;
    this.#pathManager = pathUtil;
    this.#init();
  }

  #pathHandler() {
    this.#pathManager.updatePath(
      "asset",
      "#visibility-icon",
      "icons",
      "icon-visibility-off.svg"
    );
  }

  #init() {
    const view = new StatementView(this.#container);
    this.#pathHandler();
  }
}