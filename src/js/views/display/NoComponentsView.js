export class NoComponentsView {
  #container;
  #texts;
  constructor(container) {
    this.#container = container;
    this.#texts = [];
  }

  get texts() {
    return this.#texts;
  }

  set texts(arrTexts) {
    this.#texts = arrTexts;
  }

  #infoTexts() {
    const createTagP = (txt) => `<p class="info-text">${txt}</p>`;
    return this.#texts.map((txt) => createTagP(txt)).join("");
  }

  #createNoEventsContainer() {
    return `
    <div class="no-events">
      <img class="no-events__img" id="no-events-img">
      <div class="no-events__text">
       ${this.#infoTexts()}
      </div>
    </div>
    `;
  }

  render() {
    const noEventsStr = this.#createNoEventsContainer();
    this.#container.insertAdjacentHTML("afterbegin", noEventsStr);
  }
}
