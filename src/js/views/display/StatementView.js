export class StatementView {
  #container;
  constructor(container) {
    this.#container = container;
  }

  #create() {
    return `
      <h1 class="section__h1 statement__title">Financial Statement</h1>
      <div class="statement__container">
        <div class="statement__total">R$ <span id="total-value" class="statement__total-value"
            data-visibility="off">******</span></div>
        <button class="btn-unset statement__visibility-button" data-visibility="off">
          <img id="visibility-icon" class="icon statement__visibility-icon" alt="Closed eye">
        </button>
      </div>
    `
  }

  render() {
    this.#container.insertAdjacentHTML("afterbegin", this.#create());
  }
}