import { StatementView } from "../views/StatementView.js";
import pathUtil from "../utils/PathManager.js";
import { ThemeView } from "../views/layout/ThemeView.js";

export class StatementCtrl {
  #container;
  constructor(container) {
    this.#container = container;
    this.pathManager = pathUtil;
    this.#init();
  }

  pathHandler(state = "off") {
    const theme = ThemeView.getStoredTheme();
    this.pathManager.updatePath(
      "asset",
      "#visibility-icon",
      `icons${theme}`,
      `icon-visibility-${state}.svg`
    );
  }

  #init() {
    const view = new StatementView(this.#container);
    view.render();
    this.pathHandler();
    view.switchVisibility(this.pathHandler.bind(this));
  }
}
