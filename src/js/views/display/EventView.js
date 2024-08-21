import { DisplayView } from "./DisplayView.js";
import { capitalize } from "../../utils/stringUtils.js";

export class EventView extends DisplayView {
  constructor(container, event) {
    super(container, event);
  }

  get #btnClass() {
    return this.component.type === "payment" ? "btn-attention" : "";
  }

  get #btnText() {
    return this.component.type === "payment" ? "Pay" : "See";
  }

  get #labelValue() {
    return [
      { label: "Due Date", value: this.component.dueDate },
      { label: "Value", value: this.component.value },
    ];
  }

  get #headerCard() {
    return this._createHeaderCard(capitalize(this.component.type));
  }

  get #mainCard() {
    return this._createMainCard(...this.#labelValue);
  }

  get #footerCard() {
    const str = `
      <button class="btn ${this.#btnClass} card-data__btn">
      ${this.#btnText}
      </button>
    `;
    return this._createFooterCard(str);
  }

  render() {
    const htmlStr = `
      <article id="event-${this.component.id}" class="card card-data event__${
      this.component.type
    }">
        ${this.#headerCard}
        ${this.#mainCard}
        ${this.#footerCard}
      </article>
      `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
