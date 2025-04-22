export class CardLoading {
  #nRows;

  /** @param {number} nRows */
  constructor(nRows) {
    this.#nRows = nRows;
  }

  get #itemsTemplate() {
    return `
        <div class="card-state__item">
          <span class="card-state__label skelon"></span>
          <span class="card-state__value skelon"></span>
        </div>
      `.repeat(this.#nRows);
  }

  get template() {
    const content = `<header class="card-state__header skelon"></header>
      <main class="card-state__content">
        ${this.#itemsTemplate}
      </main>
      <footer class="card-state__footer skelon"></footer>
      `;
    return `<article class="card-state loading">${content}</article>`;
  }
}
