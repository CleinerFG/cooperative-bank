import { capitalize } from "../../../../js/utils/stringUtils.js";

export class CardLink {
  #containerElement;
  #name;
  constructor(containerElement, name) {
    this.#containerElement = containerElement;
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get #template() {
    const capName = capitalize(this.#name);
    const str = `
    <div class="card-link__container">
      <a id="card-link-a-${this.#name}" class="card-link__a" rel="next">
        <div class="card card-link">
          <img id="card-icon-${this.#name}"
            class="icon card-link__icon"
            alt="${capName} Icon">
          <span class="label card-link__label">${capName}</span>
        </div>
      </a>
    </div>
    `;
    return str;
  }

  render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this.#template);
  }
}
