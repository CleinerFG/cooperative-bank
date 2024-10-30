import { AbstractMethodError } from "../errors/AbstractMethodError.js";

export class ComponentCard {
  #containerElement;
  #model;
  constructor(containerElement, modelParams) {
    this.#containerElement = containerElement;
    this.#model = new this._ModelClass(modelParams);
    this.#init();
  }

  get _model() {
    return this.#model;
  }

  get _ModelClass() {
    throw new AbstractMethodError("_ModelClass");
  }

  get _cssId() {
    throw new AbstractMethodError("_cssId");
  }

  get _cssClass() {
    throw new AbstractMethodError("_cssClass");
  }

  get _cardItemsTemplate() {
    throw new AbstractMethodError("_cardItemsTemplate");
  }

  get _cardHeaderTemplate() {
    throw new AbstractMethodError("_cardHeaderTemplate");
  }

  get _cardFooterTemplate() {
    throw new AbstractMethodError("_cardFooterTemplate");
  }

  selfRemove() {
    document.getElementById(this._cssId).remove();
  }

  #buildCardItem(label, value) {
    return `
      <div class="card-data__item">
        <span class="card-data__label">${label}</span>
        <span class="card-data__value">${value}</span>
      </div>
    `;
  }

  #buildCardHeader() {
    return `
      <header class="card-data__header">
      ${this._cardHeaderTemplate}
      </header>
      `;
  }

  #buildCardMain() {
    const items = this._cardItemsTemplate
      .map(({ label, value }) => this.#buildCardItem(label, value))
      .join("");

    return `
    <main class="card-data__content">
    ${items}
    </main>
    `;
  }

  #buildCardFooter() {
    return `
    <footer class="card-data__footer">
      ${this._cardFooterTemplate}
    </footer>
    `;
  }

  _modalHandler() {
    // If there is any modal window
    // Implement it in the subclass
  }

  #buildCard() {
    return `
    <article id="${this._cssId}" class="card card-data ${this._cssClass}">
        ${this.#buildCardHeader}
        ${this.#buildCardMain}
        ${this.#buildCardFooter}
      </article>
  
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("afterbegin", this.#buildCard());
  }

  #init() {
    this.#render();
    this._modalHandler();
  }
}
