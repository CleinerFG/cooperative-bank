import { DisplayView } from "./DisplayView.js";
import { capitalize } from "../../utils/stringUtils.js";

export class EventView extends DisplayView {
  constructor(container, event) {
    super(container, event);
  }

  #getBtnClass() {
    return this.component.type === "payment" ? "btn-attention" : "";
  }

  #getBtnText() {
    return this.component.type === "payment" ? "Pay" : "See";
  }

  #getLabelValue() {
    return [
      { label: "Due Date", value: this.component.dueDate },
      { label: "Value", value: this.component.value },
    ];
  }

  #getFooterStr() {
    return `
      <button class="btn ${this.#getBtnClass()} card-data__btn">
      ${this.#getBtnText()}
      </button>
    `;
  }

  render() {
    const capitalizedType = capitalize(this.component.type);

    const htmlStr = `
      <article id="event-${this.component.id}" class="card card-data event__${
      this.component.type
    }">
        ${this._createHeaderCard(capitalizedType)}
        ${this._createMainCard(...this.#getLabelValue())}
        ${this._createFooterCard(this.#getFooterStr())}
      </article>
      `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
