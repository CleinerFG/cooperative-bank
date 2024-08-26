import { ActionCardView } from "../../views/display/ActionCardView.js";
import { themeCtrl } from "../layout/ThemeCtrl.js";
import pathUtil from "../../utils/PathManager.js";

export class ActionCardsCtrl {
  #container;
  #sectionData;
  #pathManager;
  #ActionCardView;
  #viewInstances;
  constructor(container, sectionData) {
    this.#container = container;
    this.#sectionData = sectionData;
    this.#pathManager = pathUtil;
    this.#ActionCardView = ActionCardView;
    this.#viewInstances = [];
    this.#init();
  }

  #defineHtmlPath(view) {
    this.#pathManager.updatePath(
      "html",
      `#card-link-${view.name}`,
      this.#sectionData.name,
      view.name
    );
  }

  #pathHandler() {
    this.#viewInstances.forEach((view) => {
      this.#defineHtmlPath(view);
    });
  }

  #createView(name) {
    return new this.#ActionCardView(this.#container, name);
  }

  #renderActionCards() {
    this.#viewInstances.forEach((view) => view.render());
  }

  #addActionCards() {
    const items = this.#sectionData.items;
    const views = items.map((item) => this.#createView(item));
    this.#viewInstances = views;
  }

  #assetHandlers() {
    const names = this.#viewInstances.map((view) => view.name);
    const handlers = names.map((name) => {
      return (pathManager, theme) => {
        pathManager.updatePath(
          "asset",
          `#card-icon-${name}`,
          `icons${theme}`,
          `icon-${name}.svg`
        );
      };
    });

    handlers.forEach((handler) => themeCtrl.addAssetHandler(handler));
  }

  #init() {
    this.#addActionCards();
    this.#renderActionCards();
    this.#assetHandlers();
    this.#pathHandler();
  }
}
