import { AbstractMethodError } from "../../errors/AbstractMethodError.js";

export class ModalView {
  constructor(){
    this._init()
  }

  get _modalContent() {
    throw new AbstractMethodError("_modalContent");
  }

  set #bodyOverflow(value) {
    document.body.style.overflow = value;
  }

  #build() {
    return `
    <div id="modal" class="modal">
    <article class="modal__body">
      <button class="modal__close-btn" aria-label="Close window">
        &times;
      </button>
      <section class="modal__content">
        ${this._modalContent}
      </section>
    </article>
    </div>
    `;
  }

  #render() {
    document.body.insertAdjacentHTML("beforeend", this.#build());
  }

  #defineListeners() {
    const modalElement = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".modal__close-btn");
    closeModalBtn.addEventListener("click", () => {
      modalElement.remove();
      this.#bodyOverflow = "";
    });
  }

  _init() {
    this.#bodyOverflow = "hidden";
    this.#render();
    this.#defineListeners();
  }
}
