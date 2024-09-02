import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class ComponentView {
  #container;
  #component;
  constructor(container, component) {
    this.#container = container;
    this.#component = component;
  }

  get component() {
    return this.#component;
  }

  get _cssId() {
    throw new AbstractMethodError("render");
  }

  get _cssClass() {
    throw new AbstractMethodError("render");
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
    return `
      <div class="card-data__item">
        <span class="card-data__label">${label}</span>
        <span class="card-data__value">${value}</span>
      </div>
    `;
  }

  #createCard() {
    return `
    <article id="${this._cssId}" class="card card-data ${this._cssClass}">
        ${this._headerCard}
        ${this._mainCard}
        ${this._footerCard}
      </article>
  
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

  selfRemove() {
    document.getElementById(this._cssId).remove();
  }

  render() {
    const cardStr = this.#createCard();
    this.#container.insertAdjacentHTML("afterbegin", cardStr);
  }
}
