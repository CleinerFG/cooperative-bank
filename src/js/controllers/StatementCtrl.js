import pathUtil from "../utils/PathManager.js";
import { StatementView } from "../views/StatementView.js";
import { ThemeView } from "../views/layout/ThemeView.js";

export class StatementCtrl {
  #view;
  #container = document.querySelector(".statement__container");
  constructor() {
    this.#view = new StatementView(this.#container);
    this.pathManager = pathUtil;
    this.#init();
  }

  assetHandler(state) {
    const theme = ThemeView.getStoredTheme();
    this.pathManager.updatePath(
      "asset",
      "#visibility-icon",
      `icons${theme}`,
      `icon-visibility-${state}.svg`
    );
  }

  #init() {
    this.assetHandler("off");
    this.#view.switchVisibility(this.assetHandler.bind(this));
  }
}
