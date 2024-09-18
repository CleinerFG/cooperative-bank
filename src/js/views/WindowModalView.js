import { AbstractMethodError } from "../errors/AbstractMethodError";

export class WindowModalView {
  constructor() {
    this.#init();
  }

  get _modalContent() {
    throw new AbstractMethodError("_buildContent");
  }

  #build() {
    return `
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        ${this._modalContent}
      </div>
    </div>
    `;
  }

  #defineListeners() {
    const modalElement = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".close-btn");
    closeModalBtn.addEventListener("click", () => {
      modalElement.style.display = "none";
    });
  }

  #init() {
    this.#build();
    this.#defineListeners();
  }
}
