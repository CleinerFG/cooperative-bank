import { capitalize } from "../../../../js/utils/stringUtils.js";

export class ActionCardView {
  #container;
  #name;
  constructor(container, name) {
    this.#container = container;
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  #createCardAction() {
    const capName = capitalize(this.#name);
    const str = `
    <div class="card-action__container">
      <a id="card-link-${this.#name}" class="card-action__link" rel="next">
        <div class="card card-action">
          <img id="card-icon-${this.#name}"
            class="icon card-action__icon"
            alt="${capName} Icon">
          <span class="label card-action__label">${capName}</span>
        </div>
      </a>
    </div>
    `;
    return str;
  }

  render() {
    const cardStr = this.#createCardAction();
    this.#container.insertAdjacentHTML("beforeend", cardStr);
  }
}
