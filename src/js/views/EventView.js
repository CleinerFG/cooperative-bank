import { ComponentView } from "./ComponentView.js";

export class EventView extends ComponentView {
  #instanceOf;
  constructor(parentNode, event) {
    super(parentNode, event);
    this.#instanceOf = event.constructor.name;
  }

  render() {
    let entity;
    let entityValue;
    let btnText;
    let btnClass = "";
    switch (this.#instanceOf) {
      case "Payment":
        entity = "Creditor";
        entityValue = this.component.creditor;
        btnText = "Pay";
        btnClass = "btn-attention";
        break;
      case "Investment":
        entity = "Type";
        entityValue = this.component.investmentType;
        btnText = "See";
    }

    const htmlStr = `
      <article id="event-${this.eventID}" class="card card-data event__${
      this.#instanceOf
    }">
        <header class="card-data__header">${this.#instanceOf}</header>
        <main class="card-data__content">
          <div class="card-data__item">
            <span class="card-data__label">Due date</span>
            <span class="card-data__value">${this.dueDate}</span>
          </div>
          <div class="card-data__item">
            <span class="card-data__label">${entity}</span>
            <span class="card-data__value">${entityValue}</span>
          </div>
          <div class="card-data__item">
            <span class="card-data__label">Value</span>
            <span class="card-data__value">$ ${this.value}</span>
          </div>
        </main>
        <footer class="card-data__footer">
          <button class="btn ${btnClass} card-data__btn">${btnText}</button>
        </footer>
      </article>
      `;
    this.parentNode.insertAdjacentHTML("afterbegin", htmlStr);
  }
}
