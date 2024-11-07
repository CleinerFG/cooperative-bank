import { ApiService } from "../../../../js/service/ApiService.js";
import { numberToCurrency } from "../../../../js/utils/formatters.js";
import { PathManager } from "../../../../js/utils/PathManager.js";
import { simulateWait } from "../../../../js/utils/tests.js";

export class FinancialStatement {
  #containerElement;
  #endpoint = "financial-statement";
  constructor() {
    this.#containerElement = document.querySelector(".statement__container");
    this.#init();
  }

  get #template() {
    return `
      <div class="statement__total"><span id="statement-amount" class="statement__amount">R$ ******</span></div>
      <button class="btn-unset statement__visibility-btn" data-visibility="off">
        <img id="visibility-icon" class="icon statement__visibility-icon" alt="Closed eye">
      </button>

    `;
  }

  get #visibilityBtnElement() {
    return document.querySelector(".statement__visibility-btn");
  }

  get #spanAmount() {
    return document.getElementById("statement-amount");
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
      this.#spanAmount.classList.add("statement__amount-active");
      await simulateWait(2);
      const value = await this.#fetchFromApi();
      this.#spanAmount.classList.remove("statement__amount-active");
      currencyValue = numberToCurrency.format(value);
    }
    this.#spanAmount.textContent = currencyValue;
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
