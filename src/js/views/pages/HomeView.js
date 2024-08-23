import { PageView } from "./PageView.js";
import { capitalize } from "../../utils/stringUtils.js";

export class HomeView extends PageView {
  constructor() {}

  #createStatement() {
    return `
    <section class="section statement">
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement__container">
        <div class="statement__total">R$ <span id="total-value" class="statement__total-value"
            data-visibility="off">******</span></div>
        <button class="btn-unset statement__visibility-button" data-visibility="off">
          <img id="visibility-icon" class="icon statement__visibility-icon" alt="Closed eye">
        </button>
      </div>
    </section>
    `;
  }

  #createSection(name) {
    return `
    <section class="section ${name}">
      <h2 class="section__h2">${capitalize(name)}</h2>
      <div class="cards ${name}__cards">
      </div>
    </section>
    `;
  }

  #createAllSections() {
    const sections = ["loans", "investments", "events"];
    return sections.map((sec) => this.#createSection(sec));
  }

  _pagecontent() {
    const content = `
    ${this.#createStatement()}
    ${this.#createAllSections()}
    `;
    return content;
  }
}
