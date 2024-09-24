import { ActionCardView } from "../views/ActionCardView.js";
import { PathManager } from "../../../../js/utils/PathManager.js";

export class ActionCardsCtrl {
  #sections = [
    {
      name: "loans",
      containerSelector: ".loans__cards",
      items: ["requests", "payments", "overview", "timeline"],
      viewInstances: [],
    },
    {
      name: "investments",
      containerSelector: ".investments__cards",
      items: ["all", "reports"],
      viewInstances: [],
    },
  ];
  #viewClass = ActionCardView;
  constructor() {
    this.#init();
  }

  #getContainer(sectionName) {
    const selector = `.${sectionName}__cards`;
    return document.querySelector(selector);
  }

  #defineAssetPath(view) {
    PathManager.updateIcon(`#card-icon-${view.name}`, `icon-${view.name}.svg`);
  }

  #defineHtmlPath(viewName, sectionName) {
    PathManager.updateHtml(`#card-link-${viewName}`, sectionName, viewName);
  }

  #pathHandler() {
    this.#sections.forEach((section) => {
      section.viewInstances.forEach((view) => {
        this.#defineAssetPath(view);
        this.#defineHtmlPath(view.name, section.name);
      });
    });
  }

  #addViewInstances() {
    this.#sections.forEach((section) => {
      const instances = section.items.map((item) => {
        return new this.#viewClass(this.#getContainer(section.name), item);
      });
      section.viewInstances = instances;
    });
  }

  #render() {
    this.#sections.forEach((section) => {
      section.viewInstances.forEach((view) => view.render());
    });
  }

  #init() {
    this.#addViewInstances();
    this.#render();
    this.#pathHandler();
  }
}
