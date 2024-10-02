export class LoadingCardView {
  #container;
  constructor(container) {
    this.#container = container;
  }

  get #template() {
    return `
    <article class="card card-data loading">
      <header class="card-data__header"></header>
      <main class="card-data__content">
        <div class="card-data__item">
          <span class="card-data__label"></span>
          <span class="card-data__value"></span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label"></span>
          <span class="card-data__value"></span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label"></span>
          <span class="card-data__value"></span>
        </div>
      </main>
      <footer class="card-data__footer"></footer>
    </article>
    `;
  }

  render() {
    this.#container.insertAdjacentHTML("beforeend", this.#template);
  }

  remove() {
    this.#container.querySelector(".card-data.loading").remove();
  }
}
