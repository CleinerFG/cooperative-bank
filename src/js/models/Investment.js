import { Event } from "./Event.js";
export class Investment extends Event {
  constructor(dueDate, value, investmentType) {
    super("Investment", dueDate, value);
    this._investmentType = investmentType;
  }

  get investmentType() {
    return this._investmentType;
  }

  set investmentType(value) {
    this._investmentType = value;
  }

  getHtmlStr() {
    return `
    <article class="card card-data event__investment">
      <header class="card-data__header">Investment</header>
      <main class="card-data__content">
        <div class="card-data__item">
          <span class="card-data__label">Due date</span>
          <span class="card-data__value">${this.dueDate}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Type</span>
          <span class="card-data__value">${this.investmentType}</span>
        </div>
        <div class="card-data__item">
          <span class="card-data__label">Value</span>
          <span class="card-data__value">$ ${this.value}</span>
        </div>
      </main>
      <footer class="card-data__footer">
        <button class="btn card-data__btn">See</button>
      </footer>
    </article>
    `;
  }
}

const test = new Investment(10, 1045, 461);
