import { Event } from "./Event.js";

export class Payment extends Event {
  constructor(eventID, dueDate, value, creditor) {
    super("Payment", eventID, dueDate, value);
    this._creditor = creditor;
  }

  getHtmlStr() {
    return `
    <article id="event-${this.eventID}" class="card card-data event__payment">
      <header class="card-data__header">Payment</header>
      <main class="card-data__content">
        <div class="card-data__item">
          <span class="card-data__label">Due date</span>
          <span class="card-data__value">${this.dueDate}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Creditor</span>
          <span class="card-data__value">${this._creditor}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Value</span>
          <span class="card-data__value">$ ${this.value}</span>
        </div>
      </main>
      <footer class="card-data__footer">
        <button class="btn btn-attention card-data__btn">Pay</button>
      </footer>
    </article>
    `;
  }
}
