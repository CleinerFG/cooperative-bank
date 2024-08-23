import { ActionCardView } from "../../views/display/ActionCardView.js";

export class ActionCardsCtrl {
  #container;
  #ActionCardView;
  #viewInstances;
  constructor(container) {
    this.#container = container;
    this.#ActionCardView = ActionCardView;
    this.#viewInstances = [];
  }

  #createView(name) {
    return new this.#ActionCardView(this.#container, name);
  }

  addActionCard(name) {
    const view = this.#createView(name);
    this.#viewInstances.push(view);
  }

  renderActionCards() {
    this.#viewInstances.forEach((view) => view.render());
  }
}
