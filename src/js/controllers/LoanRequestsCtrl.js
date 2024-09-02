import { ComponentCtrl } from "./ComponentCtrl.js";
import { LoanRequestView } from "../views/LoanRequestView.js";

export class LoanRequestsCtrl extends ComponentCtrl {
  constructor(category) {
    const container = LoanRequestsCtrl.#defineContainer(category);
    super(container, LoanRequestView, category);
  }

  static #defineContainer(category) {
    let containerSelector;
    if (category === "opened") {
      containerSelector = ".open-requests__cards";
    } else if (category === "received") {
      containerSelector = ".received-requests__cards";
    }
    return document.querySelector(containerSelector);
  }

  _defineNoComponentsSettings() {
    super._defineNoComponentsSettings();
    const t1 = `There are no ${this._category} requests...`;
    this.noComponentsCtrl.defineTexts(t1);
  }
}
