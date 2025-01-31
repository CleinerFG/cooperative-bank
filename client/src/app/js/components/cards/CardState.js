import { CardLoading } from './CardLoading.js';
import { CardError } from './CardError.js';
import { CardEmpty } from './CardEmpty.js';

/**
 * Manages and renders different card states (loading, empty or error).
 * This class provides templates and logic to display each state in a specified container.
 */
export class CardState {
  #containerElement;
  #entity;
  /**
   * @type {"loading" | "empty" | "error"}
   */
  #state;
  #cards = {
    loading: null,
    empty: null,
    error: null,
  };

  /**
   * @param {HTMLElement} container
   * @param {string} entity
   * @param {string[]} emptyStateTexts
   */
  constructor(containerElement, entity) {
    this.#containerElement = containerElement;
    this.#entity = entity;
    this.#init();
  }

  /**
   * @param {"loading" | "empty" | "error"} value
   */
  set state(value) {
    this.#state = value;
    this.#render();
  }

  #setCards() {
    this.#cards.loading = new CardLoading(4);
    this.#cards.empty = new CardEmpty(this.#entity);
    this.#cards.error = new CardError(this.#entity);
  }

  get #templateByState() {
    const template = this.#cards[this.#state].template;
    if (this.#state === 'loading') {
      return template.repeat(4);
    }
    return template;
  }

  #render() {
    this.#containerElement.innerHTML = this.#templateByState;
  }

  #init() {
    this.#setCards();
  }
}
