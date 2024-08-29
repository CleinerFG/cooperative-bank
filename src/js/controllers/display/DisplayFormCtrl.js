export class DisplayFormCtrl {
  #container;
  #view;
  constructor(view, container, id, cssClass, action, method) {
    this.#container = container;
    this.#view = new view(container, id, cssClass, action, method);
    this.#init();
  }

  #init() {
    this.#view.render();
  }
}
