import { PageView } from "./PageView.js";
import { capitalize } from "../../utils/stringUtils.js";

export class HomeView extends PageView {
  _createStatement() {
    return `
    <section class="section statement">
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement__container"></div>
    </section>
    `;
  }

  _createSection(name) {
    return `
    <section class="section ${name}">
      <h2 class="section__h2">${capitalize(name)}</h2>
      <div class="cards ${name}__cards">
      </div>
    </section>
    `;
  }

  _createAllSections() {
    const sections = ["loans", "investments", "events"];
    return sections.map((sec) => this._createSection(sec)).join("");
  }

  _pageContent() {
    const content = `
    ${this._createStatement()}
    ${this._createAllSections()}
    `;
    return content;
  }
}
