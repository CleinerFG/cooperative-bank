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

  switchVisibility(updatePath) {
    document
      .querySelector(".statement__visibility-button")
      .addEventListener("click", (ev) => {
        const button = ev.currentTarget;
        const visibility = button.dataset.visibility;
        // Alternative text
        const alt = visibility === "on" ? "Closed eye" : "Opened eye";
        document
          .querySelector(".statement__visibility-icon")
          .setAttribute("alt", alt);

        // Switching visibility and SVG file
        const state = visibility === "off" ? "on" : "off";
        updatePath(state);
        button.dataset.visibility = state;

        // Showing the total value
        let totalValue = state === "on" ? "12.954,53" : "******";
        document.getElementById("total-value").textContent = totalValue;
      });
  }


  render() {
    this.#container.insertAdjacentHTML("afterbegin", this.#create());
  }
}