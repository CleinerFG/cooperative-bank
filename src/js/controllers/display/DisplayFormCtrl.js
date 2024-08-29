export class DisplaFormCtrl {
  #container;
  #view;
  constructor(container, view) {
    this.#container = container;
    this.#view = new view(container);
    this.init();
  }

  init() {
    this.#view.render();
  }
}
