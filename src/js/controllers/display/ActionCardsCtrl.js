import { ActionCardView } from "../../views/display/ActionCardView.js";
import pathUtil from "../../utils/PathManager.js";
import { getTheme } from "../../utils/domUtils.js";

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

  #defineAssetPath(view) {
    const theme = getTheme();
    this.#pathManager.updatePath(
      "asset",
      `#card-icon-${view.name}`,
      `icons${theme}`,
      `icon-${view.name}.svg`
    );
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
      this.#defineAssetPath(view);
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

  #init() {
    this.#addActionCards();
    this.#renderActionCards();
    this.#pathHandler();
  }
}
