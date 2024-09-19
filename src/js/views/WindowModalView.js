export class WindowModalView {
  #modalContentTypes = {
    confirmWithPassword: `
    <h2>Confirm With Password</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas vero id obcaecati modi sapiente fuga animi
        veritatis eligendi, qui enim accusantium numquam? Repudiandae sint labore vel, officia nesciunt pariatur soluta.
      </p>
    `,
  };
  #currentModalContent;

  set modalContent(type) {
    this.#currentModalContent = this.#modalContentTypes[type];
  }

  #build() {
    return `
    <div id="modal" class="modal">
      <article class="modal__body">
        <header class="modal__header">
          <button class="modal__close-btn" aria-label="Close window">
            &times;
          </button>
        </header>
        <section class="modal__content">
          ${this.#currentModalContent}
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
    });
  }

  init() {
    this.#render();
    this.#defineListeners();
  }
}
