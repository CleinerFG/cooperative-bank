import { AbstractMethodError } from "../errors/AbstractMethodError.js";

export class ComponentView {
  #containerElement;
  #componentModel;
  constructor(containerElement, componentModel) {
    this.#containerElement = containerElement;
    this.#componentModel = componentModel;
    this.#init();
  }

  get componentModel() {
    return this.#componentModel;
  }

  get _cssId() {
    throw new AbstractMethodError("_cssId");
  }

  get _cssClass() {
    throw new AbstractMethodError("_cssClass");
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
    const entity = this.componentModel.creditor ? "Creditor" : "Debtor";
    const entityValue =
      this.componentModel.creditor ?? this.componentModel.debtor;
    return { entity, entityValue };
  }

  selfRemove() {
    document.getElementById(this._cssId).remove();
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

  _modalHandler() {
    // If there is any modal window
    // Implement it in the subclass
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

  #render() {
    const cardStr = this.#createCard();
    this.#containerElement.insertAdjacentHTML("afterbegin", cardStr);
  }

  #init() {
    this.#render();
    this._modalHandler();
  }
}
