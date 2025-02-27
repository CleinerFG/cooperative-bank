import { CardManager } from '../../core/CardManager.js';
import { capitalize } from '../../../../global/js/utils/stringUtils.js';
import { AbstractMethodError } from '../../../../global/js/errors/AbstractErrors.js';
import { handleIconDark } from '../../../../global/js/utils/themeUtils.js';
import { ASSETS_ROUTE } from '../../constants/routes.js';

export class LoanManager extends CardManager {
  #ICON_FILTER_ID = `icon-filter-${this._entityMap.entity}`;
  #activeCategory = this._entityMap.categories[0];

  constructor() {
    super();
    this._init();
  }

  get _containerElement() {
    return document.querySelector('.section.loans');
  }

  /**
   * @type {(category: string) => Promise<any>[]}
   */
  async _fetchService() {
    throw new AbstractMethodError('_fetchService');
  }

  /** @param {number} n */
  #getFilterCategoryId(n) {
    return `${this._entityMap.categories[n].name}-${this._entityMap.entity}-filter-${n}`;
  }

  /** @param {number} n */
  #getFilterBtnElement(n) {
    return this._containerElement.querySelector(
      `#${this.#getFilterCategoryId(n)}`
    );
  }

  get #categoriesSwitchTemplate() {
    const getCatName = (n) => capitalize(this._entityMap.categories[n].name);
    return `
      <div class="entity-categories">
        <div id="${this.#getFilterCategoryId(0)}" class="entity-category active">${getCatName(0)}</div>
        <div id="${this.#getFilterCategoryId(1)}" class="entity-category">${getCatName(1)}</div>
      </div>
      `;
  }

  get #dateFilterTemplate() {
    const icon = `${ASSETS_ROUTE}/icons/icon-filter.svg`;
    return `
        <div class="dashboard-filter">
          <div class="inputs-container">
            <div class="inp-group">
              <label for="start-date-filter-${this._entityMap.entity}">Start date</label>
              <input id="start-date-filter-${this._entityMap.entity}" class="inp inp-date" type="date">
            </div>
            <div class="inp-group">
              <label for="end-date-filter-${this._entityMap.entity}">End date</label>
              <input id="end-date-filter-${this._entityMap.entity}" class="inp inp-date" type="date">
            </div>
          </div>
          <button class="btn-unset btn-filter">
            <img id="${this.#ICON_FILTER_ID}" class="icon ${handleIconDark()}" src="${icon}" alt="Filter Icon">
          </button>
        </div>
        `;
  }

  get _dashboardTemplate() {
    return `
      <div class="dashboard-container">
        ${this.#categoriesSwitchTemplate}
        ${this.#dateFilterTemplate}
      </div>
    `;
  }

  get _titleTemplate() {
    return capitalize(this.#activeCategory.name);
  }

  #toggleActiveBtn() {
    const upActiveCat = (cat) => {
      this.#activeCategory = cat;
      this._titleElement.textContent = capitalize(cat.name);
    };

    const index = this._entityMap.categories.findIndex(
      (category) => category.name === this.#activeCategory.name
    );
    const nextIndex = (index + 1) % 2;

    const activeBtn = this.#getFilterBtnElement(index);
    const nextActiveBtn = this.#getFilterBtnElement(nextIndex);

    activeBtn.classList.remove('active');
    nextActiveBtn.classList.add('active');

    upActiveCat(this._entityMap.categories[nextIndex]);
    this.renderCards(this.#activeCategory.name);
  }

  #setListeners() {
    for (let i = 0; i < 2; i++) {
      this.#getFilterBtnElement(i).addEventListener(
        'click',
        this.#toggleActiveBtn.bind(this)
      );
    }
  }

  async _init() {
    await super._init();
    this.#setListeners();
    this.renderCards(this.#activeCategory.name);
  }
}
