import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class DisplayView {
  #container;
  #component;
  constructor(container, component) {
    this.#container = container;
    this.#component = component;
  }

  get component() {
    return this.#component;
  }

  get container() {
    return this.#container;
  }

  get _cssId() {
    return `card-${this.component.id}`;
  }

  get _cssClass() {
    return `card__${this.component.type}`;
  }

  get _headerCard() {
    throw new AbstractMethodError("_headerCard");
  }

  get _mainCard() {
    throw new AbstractMethodError("_mainCard");
  }

  get _footerCard() {
    throw new AbstractMethodError("_footerCard");
  }

  get _labelValue() {
    throw new AbstractMethodError("_labelValue");
  }

  get _entityInfo() {
    const entity = this.component.creditor ? "Creditor" : "Debtor";
    const entityValue = this.component.creditor ?? this.component.debtor;
    return { entity, entityValue };
  }

  #renderCardItem(label, value) {
    console.log({ label, value });
    return `
      <div class="card-data__item">
        <span class="card-data__label">${label}</span>
        <span class="card-data__value">${value}</span>
      </div>
    `;
  }

  _createHeaderCard(str) {
    return `
      <header class="card-data__header">
      ${str}
      </header>
      `;
  }

  _createMainCard(...cardItems) {
    const itemsStr = cardItems
      .map(({ label, value }) => this.#renderCardItem(label, value))
      .join("");

    return `
    <main class="card-data__content">
    ${itemsStr}
    </main>
    `;
  }

  _createFooterCard(str) {
    return `
    <footer class="card-data__footer">
      ${str}
    </footer>
    `;
  }

  _createCard(cssId, cssClass, header, main, footer) {
    return `
    <article id="${cssId}" class="card card-data ${cssClass}">
        ${header}
        ${main}
        ${footer}
      </article>
  
    `;
  }

  render() {
    throw new Error("Must be implemented in the subclass");
  }
}
