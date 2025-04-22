import { CardLoading } from './CardLoading.js';
import { CardError } from './CardError.js';
import { CardEmpty } from './CardEmpty.js';

export class CardState {
  #containerElement;
  #entity;
  #cardSkelonRows;
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
   * @param {number} cardSkelonRows
   */
  constructor(containerElement, entity, cardSkelonRows) {
    this.#containerElement = containerElement;
    this.#entity = entity;
    this.#cardSkelonRows = cardSkelonRows;
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
    this.#cards.loading = new CardLoading(this.#cardSkelonRows);
    this.#cards.empty = new CardEmpty(this.#entity);
    this.#cards.error = new CardError(this.#entity);
  }

  get #templateByState() {
    const template = this.#cards[this.#state].template;
    if (this.#state === 'loading') return template.repeat(4);
    return template;
  }

  #render() {
    this.#containerElement.innerHTML = this.#templateByState;
  }

  #init() {
    this.#setCards();
  }
}
