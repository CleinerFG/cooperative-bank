export class FormCtrl {
  #view;
  constructor(params) {
    this.#view = new params.view(params);
    this.#init();
  }

  #init() {
    this.#view.init();
  }
}
