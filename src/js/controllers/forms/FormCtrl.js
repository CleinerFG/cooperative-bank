export class FormCtrl {
  #view;
  constructor(params) {
    this.#view = new params.view(params);
    this.#init();
  }

  #submitHandler() {
    this.#view.formElement.addEventListener("submit", (ev) => {
      console.log("Submit was actived");
      
      ev.preventDefault();
    });
  }

  #init() {
    this.#view.init();
    this.#submitHandler();
  }
}
