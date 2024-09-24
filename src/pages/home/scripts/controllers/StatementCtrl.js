import { StatementView } from "../views/StatementView.js";

export class StatementCtrl {
  #view;
  constructor() {
    this.#view = new StatementView();
    this.#init();
  }

  #init() {
    // Implement update value from api
  }
}
