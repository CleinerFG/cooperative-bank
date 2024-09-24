import { PathManager } from "../../../../js/utils/PathManager.js";

export class StatementView {
  #container;
  constructor() {
    this.#container = document.querySelector(".statement__container");
    this.#init();
  }

  #build() {
    return `
      <div class="statement__total">R$ <span id="total-value" class="statement__total-value"
          data-visibility="off">******</span></div>
      <button class="btn-unset statement__visibility-button" data-visibility="off">
        <img id="visibility-icon" class="icon statement__visibility-icon" alt="Closed eye">
      </button>

    `;
  }

  #switchVisibility() {
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
        PathManager.updateIcon(
          "#visibility-icon",
          `icon-visibility-${state}.svg`
        );
        button.dataset.visibility = state;

        // Showing the total value
        let totalValue = state === "on" ? "12.954,53" : "******";
        document.getElementById("total-value").textContent = totalValue;
      });
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this.#build());
  }

  #pathHandler() {
    PathManager.updateIcon("#visibility-icon", `icon-visibility-off.svg`);
  }

  #init() {
    this.#render();
    this.#pathHandler();
    this.#switchVisibility();
  }
}
