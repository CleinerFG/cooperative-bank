export class ProgressBar {
  #containerElement;
  #max;
  #current;

  /**
   * @param {HTMLElement} containerElement
   * @param {number} max
   * @param {number} current
   */
  constructor(containerElement, max, current) {
    this.#containerElement = containerElement;
    this.#max = max;
    this.#current = current;
    this.#init();
  }

  get #barElement() {
    return this.#containerElement.querySelector('.progress-bar');
  }

  get #fillElement() {
    return this.#barElement.querySelector('.progress-fill');
  }

  get #template() {
    return `
    <div class="progress-bar" data-max="${this.#max}" data-current="${this.#current}">
      <div class="progress-fill"></div>
    </div>
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  #updateFill() {
    const percentage = (this.#current / this.#max) * 100;
    this.#fillElement.style.width = percentage + '%';
  }

  #init() {
    this.#render();
    this.#updateFill();
  }
}
