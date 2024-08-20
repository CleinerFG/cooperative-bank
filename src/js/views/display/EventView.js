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

  render() {
    const btnClass = this.#getBtnClass();
    const btnText = this.#getBtnText();
    const capitalizedType = capitalize(this.component.type);

    const htmlStr = `
      <article id="event-${this.component.id}" class="card card-data event__${
      this.component.type
    }">
        <header class="card-data__header">${capitalizedType}</header>
        <main class="card-data__content">
          ${this._renderCardItem("Due Date", this.component.dueDate)}
          ${this._renderCardItem("Value", this.component.value)}
        </main>
        <footer class="card-data__footer">
          <button class="btn ${btnClass} card-data__btn">${btnText}</button>
        </footer>
      </article>
      `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
