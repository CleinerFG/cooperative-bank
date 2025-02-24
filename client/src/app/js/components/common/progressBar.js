import {
  capitalize,
  toCamelCase,
} from '../../../../global/js/utils/stringUtils.js';

export class ProgressBar {
  #containerElement;
  #label;

  /**
   * @param {Element} containerElement
   * @param {string} label
   */
  constructor(containerElement, label) {
    this.#containerElement = containerElement;
    this.#label = label;
  }

  get #barElement() {
    return this.#containerElement.querySelector('.progress-bar');
  }

  get #fillElement() {
    return this.#barElement.querySelector('.progress-fill');
  }

  get #valueElement() {
    const id = `#${toCamelCase(this.#label)}`;
    return this.#containerElement.querySelector(id);
  }

  get template() {
    return `
    <div class="progress-bar__container">
      <div class="info-item">
        <span class="info-label">${capitalize(this.#label)}</span>
        <span id="${toCamelCase(this.#label)}" class="info-value skelon">xx of xx</span>
      </div>
      <div class="progress-bar" data-max data-current>
        <div class="progress-fill glossy"></div>
      </div>
    </div>
    `;
  }

  updateProgress(current, max) {
    this.#valueElement.innerText = `${current} of ${max}`;
    const percentage = (current / max) * 100;
    this.#fillElement.style.width = percentage + '%';
  }
}
