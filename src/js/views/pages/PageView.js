import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import { HeaderCtrl } from "../../controllers/layout/HeaderCtrl.js";
import { FooterCtrl } from "../../controllers/layout/FooterCtrl.js";
import { ThemeView } from "../layout/ThemeView.js";
import { ActionCardsCtrl } from "../../controllers/display/ActionCardsCtrl.js";

export class PageView {
  #body;
  #theme;
  constructor() {
    this.#body = document.body;
    this.#theme = "dark";
    this.#init();
  }

  get theme() {
    return this.#theme;
  }

  set theme(value) {
    this.#body.dataset.theme = value;
    this.#theme = value;
  }

  #insertContent() {
    const main = `
    <main class="main">
    ${this._pageContent()}
    </main>
    `;
    this.#body.insertAdjacentHTML("beforeend", main);
  }

  _pageContent() {
    throw new AbstractMethodError("_pageContent");
  }

  _initActionCtrl() {
    const loans = {
      name: "loans",
      items: ["requests", "payments", "overview", "timeline"],
    };

    const investments = {
      name: "investments",
      items: ["all", "reports"],
    };

    const loansContainer = document.querySelector(".loans__cards");
    new ActionCardsCtrl(loansContainer, loans);

    const investContainer = document.querySelector(".investments__cards");
    new ActionCardsCtrl(investContainer, investments);
  }

  #init() {
    this.#insertContent();
    new HeaderCtrl();
    new FooterCtrl();
    this._initActionCtrl()
    new ThemeView().initializeTheme();
  }
}
