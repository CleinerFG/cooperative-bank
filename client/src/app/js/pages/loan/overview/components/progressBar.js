import { capitalize } from '../../../../../../global/js/utils/stringUtils';

export class ProgressBar {
  #containerElement;
  #label;
  #max;
  #current;

  /**
   * @param {HTMLElement} containerElement
   * @param {number} max
   * @param {number} current
   */
  constructor(containerElement, label, max, current) {
    this.#containerElement = containerElement;
    this.#label = label;
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
    <div class="progress-bar__container">
      <div class="info-item">
        <span class="info-label">${capitalize(this.#label)}</span>
        <span class="info-value">${this.#current} of ${this.#max}</span>
      </div>
      <div class="progress-bar" data-max="${this.#max}" data-current="${this.#current}">
        <div class="progress-fill glossy"></div>
      </div>
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
