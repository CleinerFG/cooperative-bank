import { capitalize } from '../../../../global/js/utils/stringUtils.js';
import { CardManager } from '../../core/CardManager.js';

export class LoanManager extends CardManager {
  #FILTER_CATEGORY_1_ID;
  #FILTER_CATEGORY_2_ID;
  #ACTIVE_CATEGORY_ID;
  constructor() {
    super(true);
    this.#FILTER_CATEGORY_1_ID = `${this._entityMap.categories[0].name}-${this._entityMap.entity}-filter-1`;
    this.#FILTER_CATEGORY_2_ID = `${this._entityMap.categories[1].name}-${this._entityMap.entity}-filter-2`;
    this.#ACTIVE_CATEGORY_ID = `active-category-${this._entityMap.entity}`;
    this._activeCategory = this._entityMap.categories[0];
    this._init();
  }

  get _containerElement() {
    return document.querySelector('.section.loans');
  }
  get #btnFilter1Element() {
    return this._containerElement.querySelector(
      `#${this.#FILTER_CATEGORY_1_ID}`
    );
  }
  get #btnFilter2Element() {
    return this._containerElement.querySelector(
      `#${this.#FILTER_CATEGORY_2_ID}`
    );
  }
  get #activeCategoryElement() {
    return this._containerElement.querySelector(`#${this.#ACTIVE_CATEGORY_ID}`);
  }

  get _customTitleTemplate() {
    const activeCatName = capitalize(this._activeCategory.name);
    return `<h2 id="${this.#ACTIVE_CATEGORY_ID}" class="card-group__h2">${activeCatName}</h2>`;
  }
  get _customComponentsTemplate() {
    const catName1 = capitalize(this._entityMap.categories[0].name);
    const catName2 = capitalize(this._entityMap.categories[1].name);
    return `
      <div class="entity-categories">
        <div id="${this.#FILTER_CATEGORY_1_ID}" class="entity-category entity-category__active">${catName1}</div>
        <div id="${this.#FILTER_CATEGORY_2_ID}" class="entity-category">${catName2}</div>
      </div>
      `;
  }
  #setListeners() {
    const updateActiveCategory = (category) => {
      this._activeCategory = category;
      this.#activeCategoryElement.textContent = capitalize(category.name);
    };
    const toggle = () => {
      const buttonsMap = {
        0: this.#btnFilter1Element,
        1: this.#btnFilter2Element,
      };
      const index = this._entityMap.categories.findIndex(
        (category) => category.name === this._activeCategory.name
      );
      const nextIndex = (index + 1) % 2;
      const activeBtn = buttonsMap[index];
      const nextActiveBtn = buttonsMap[nextIndex];
      activeBtn.classList.remove('entity-category__active');
      nextActiveBtn.classList.add('entity-category__active');
      updateActiveCategory(this._entityMap.categories[nextIndex]);
      this.renderCards(this._activeCategory.name);
    };
    this.#btnFilter1Element.addEventListener('click', toggle);
    this.#btnFilter2Element.addEventListener('click', toggle);
  }
  async _init() {
    await super._init();
    this.#setListeners();
    this.renderCards(this._activeCategory.name);
  }
}
