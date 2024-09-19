export class WindowModalView {
  #modalContentTypes = {
    confirmWithPassword: `
    <p>Test confirm with password</p>
    `,
  };
  #currentModalContent;
  constructor() {
    this.#init();
  }

  set modalContent(type) {
    this.#currentModalContent = this.#modalContentTypes[type];
  }

  #build() {
    return `
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        ${this.#currentModalContent}
      </div>
    </div>
    `;
  }

  #render() {
    document.body.insertAdjacentHTML("beforeend", this.#build());
  }

  #defineListeners() {
    const modalElement = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".close-btn");
    closeModalBtn.addEventListener("click", () => {
      modalElement.remove();
    });
  }

  #init() {
    this.#render();
    this.#defineListeners();
  }
}
