import { DisplayView } from "./DisplayView.js";

export class EventView extends DisplayView {
  constructor(container, event) {
    super(container, event);
  }

  render() {
    let btnClass = this.component.type === "payment" ? "btn-attention" : "";
    const htmlStr = `
      <article id="event-${this.component.id}" class="card card-data event__${this.component.type}">
        <header class="card-data__header">${this.component.type}</header>
        <main class="card-data__content">
          <div class="card-data__item">
            <span class="card-data__label">Due date</span>
            <span class="card-data__value">${this.component.dueDate}</span>
          </div>
          <div class="card-data__item">
            <span class="card-data__label">Value</span>
            <span class="card-data__value">$ ${this.component.value}</span>
          </div>
        </main>
        <footer class="card-data__footer">
          <button class="btn ${btnClass} card-data__btn">See</button>
        </footer>
      </article>
      `;
    this.container.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
