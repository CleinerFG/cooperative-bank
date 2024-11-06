import { ApiService } from "../../../../js/service/ApiService.js";
import { numberToCurrency } from "../../../../js/utils/formatters.js";
import { PathManager } from "../../../../js/utils/PathManager.js";

export class FinancialStatement {
  #containerElement;
  #endpoint = "financial-statement";
  constructor() {
    this.#containerElement = document.querySelector(".statement__container");
    this.#init();
  }

  get #template() {
    return `
      <div class="statement__total"><span id="total-value" class="statement__total-value"
          data-visibility="off">R$ ******</span></div>
      <button class="btn-unset statement__visibility-button" data-visibility="off">
        <img id="visibility-icon" class="icon statement__visibility-icon" alt="Closed eye">
      </button>

    `;
  }

  get #visibilityBtnElement() {
    return document.querySelector(".statement__visibility-button");
  }

  get #IconElement() {
    return document.querySelector(".statement__visibility-icon");
  }

  get #currentVisibility() {
    return this.#visibilityBtnElement.dataset.visibility;
  }

  async #fetchFromApi() {
    return await ApiService.fetchFrom(this.#endpoint);
  }

  async #updateStatement() {
    let currencyValue = "R$ ******";
    if (this.#currentVisibility === "off") {
      const value = await this.#fetchFromApi();
      console.log(`Value on statement: ${value}`);
      currencyValue = numberToCurrency.format(value);
    }
    document.getElementById("total-value").textContent = currencyValue;
  }

  #switchVisibility() {
    const updatedAlt =
      this.#currentVisibility === "on" ? "Closed eye" : "Opened eye";
    this.#IconElement.setAttribute("alt", updatedAlt);

    const updatedVisibility = this.#currentVisibility === "off" ? "on" : "off";
    this.#iconPathHandler(updatedVisibility);
    this.#visibilityBtnElement.dataset.visibility = updatedVisibility;
  }

  #btnHandler() {
    this.#visibilityBtnElement.addEventListener("click", () => {
      this.#updateStatement();
      this.#switchVisibility();
    });
  }

  #render() {
    this.#containerElement.insertAdjacentHTML("beforeend", this.#template);
  }

  #iconPathHandler(visibility) {
    PathManager.updateIcon(
      "#visibility-icon",
      `icon-visibility-${visibility}.svg`
    );
  }

  #init() {
    this.#render();
    this.#iconPathHandler("off");
    this.#btnHandler();
  }
}
