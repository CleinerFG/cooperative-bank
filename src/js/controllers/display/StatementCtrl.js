import { StatementView } from "../../views/display/StatementView.js";
import pathUtil from "../../utils/PathManager.js";

export class StatementCtrl {
  #container;
  constructor(container) {
    this.#container = container;
    this.pathManager = pathUtil;
    this.#init();
  }

  pathHandler(state = "off") {
    this.pathManager.updatePath(
      "asset",
      "#visibility-icon",
      "icons",
      `icon-visibility-${state}.svg`
    );
  }

  #init() {
    const view = new StatementView(this.#container);
    view.render();
    this.pathHandler();
    view.switchVisibility(this.pathHandler.bind(this))
  }
}