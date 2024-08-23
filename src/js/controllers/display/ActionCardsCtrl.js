import { ActionCardView } from "../../views/display/ActionCardView.js";
import pathUtil from "../../utils/PathManager.js";

export class ActionCardsCtrl {
  #container;
  #sectionName;
  #pathManager;
  #ActionCardView;
  #viewInstances;
  constructor(container, sectionName) {
    this.#container = container;
    this.#sectionName = sectionName;
    this.#pathManager = pathUtil;
    this.#ActionCardView = ActionCardView;
    this.#viewInstances = [];
  }

  #defineAssetPath(view) {
    this.#pathManager.updatePath(
      "asset",
      `#card-icon-${view.name}`,
      "icons",
      `icon-${view.name}.svg`
    );
  }

  #defineHtmlPath(view) {
    this.#pathManager.updatePath(
      "html",
      `#card-link-${view.name}`,
      this.#sectionName,
      view.name
    );
  }

  #pathHandler() {
    this.#viewInstances.forEach((view) => {
      this.#defineAssetPath(view);
      this.#defineHtmlPath(view);
    });
  }

  #createView(name) {
    return new this.#ActionCardView(this.#container, name);
  }

  addActionCard(name) {
    const view = this.#createView(name);
    this.#viewInstances.push(view);
  }

  renderActionCards() {
    this.#viewInstances.forEach((view) => view.render());
  }
}
