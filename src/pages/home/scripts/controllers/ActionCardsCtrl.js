import { ActionCardView } from "../views/ActionCardView.js";
import pathUtil from "../../../../js/utils/PathManager.js";
import { ThemeView } from "../../../../js/views/layout/ThemeView.js";

export class ActionCardsCtrl {
  #pathManager = pathUtil;
  #ActionCardView = ActionCardView;
  #container;
  #section = { name: undefined, items: [] };
  #type;
  #viewInstances;
  constructor(type) {
    this.#type = type;
    this.#viewInstances = [];
    this.#init();
  }

  #defineSettings() {
    const settings = {
      loans: {
        sectionName: "loans",
        containerSelector: ".loans__cards",
        sectionItems: ["requests", "payments", "overview", "timeline"],
      },
      investments: {
        sectionName: "investments",
        containerSelector: ".investments__cards",
        sectionItems: ["all", "reports"],
      },
    };

    const config = settings[this.#type];

    if (config) {
      this.#container = document.querySelector(config.containerSelector);
      this.#section.name = config.sectionName;
      this.#section.items = config.sectionItems;
    }
  }

  #defineAssetPath(view) {
    const theme = ThemeView.getStoredTheme();
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
      this.#section.name,
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

  #addActionCards() {
    const items = this.#section.items;
    const views = items.map((item) => this.#createView(item));
    this.#viewInstances = views;
  }

  #renderActionCards() {
    this.#viewInstances.forEach((view) => view.render());
  }

  #init() {
    this.#defineSettings();
    this.#addActionCards();
    this.#renderActionCards();
    this.#pathHandler();
  }
}
