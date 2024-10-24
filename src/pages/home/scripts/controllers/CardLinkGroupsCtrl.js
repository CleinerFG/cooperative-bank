import { CardLink } from "../components/CardLink.js";
import { PathManager } from "../../../../js/utils/PathManager.js";

export class CardLinkGroupsCtrl {
  #sectionsParams = [
    {
      name: "wallet",
      containerSelector: ".wallet__cards",
      items: ["transfer", "extract"],
    },
    {
      name: "loans",
      containerSelector: ".loans__cards",
      items: ["requests", "payments", "overview", "timeline"],
    },
    {
      name: "investments",
      containerSelector: ".investments__cards",
      items: ["all", "reports"],
    },
  ];

  #sections = [];

  constructor() {
    this.#init();
  }

  #create() {
    this.#sections = this.#sectionsParams.map((params) => new Section(params));
  }

  #init() {
    this.#create();
    this.#sections.forEach((model) => model.init());
  }
}

class Item {
  constructor(name, container) {
    this.name = name;
    this.container = container;
    this.view = new CardLink(this.container, this.name);
  }

  defineIconPath() {
    PathManager.updateIcon(`#card-icon-${this.name}`, `icon-${this.name}.svg`);
  }

  defineHtmlPath(sectionName) {
    PathManager.updateHtml(`#card-link-a-${this.name}`, sectionName, this.name);
  }
}

class Section {
  constructor(params) {
    this.name = params.name;
    this.containerSelector = params.containerSelector;
    this.items = params.items.map(
      (item) => new Item(item, this.containerElement)
    );
  }

  get containerElement() {
    return document.querySelector(this.containerSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      item.view.render();
    });
  }

  pathHandler() {
    this.items.forEach((item) => {
      item.defineIconPath();
      item.defineHtmlPath(this.name);
    });
  }

  init() {
    this.renderItems();
    this.pathHandler();
  }
}
