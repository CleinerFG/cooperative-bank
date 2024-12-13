import { CardLink } from './CardLink.js';
import { AssetManager } from '../../../core/AssetManager.js';

/**
 * Controller for managing groups of card links organized into sections.
 *
 * @class
 */
export class CardLinkGroups {
  /**
   * Parameters for configuring sections.
   * Each section contains a name, a container selector, and items.
   *
   * @private
   * @type {Array<Object>}
   */

  #sectionsParams = [
    {
      name: 'wallet',
      containerSelector: '.wallet__cards',
      items: ['transfer', 'extract'],
    },
    {
      name: 'loans',
      containerSelector: '.loans__cards',
      items: ['requests', 'payments', 'overview', 'timeline'],
    },
    {
      name: 'investments',
      containerSelector: '.investments__cards',
      items: ['all', 'reports'],
    },
  ];

  /**
   * Stores the sections created based on the parameters.
   *
   * @private
   * @type {Array<Section>}
   */
  #sections = [];

  /**
   * Initializes the controller by creating and initializing sections.
   */
  constructor() {
    this.#init();
  }

  /**
   * Creates section models from the parameters.
   *
   * @private
   */
  #create() {
    this.#sections = this.#sectionsParams.map((params) => new Section(params));
  }

  /**
   * Initializes the controller by creating and initializing all sections.
   *
   * @private
   */
  #init() {
    this.#create();
    this.#sections.forEach((model) => model.init());
  }
}

/**
 * Represents an individual card link item.
 *
 * @class
 */
class Item {
  /**
   * @param {string} name - The name of the item.
   * @param {HTMLElement} container - The container where the item will be rendered.
   */
  constructor(name, container) {
    this.name = name;
    this.container = container;
    this.view = new CardLink(this.container, this.name);
  }

  /**
   * Defines the icon path for the card using the AssetManager utility.
   *
   * @public
   */
  defineIconPath() {
    AssetManager.updateIcon(`#card-icon-${this.name}`, `icon-${this.name}.svg`);
  }

  /**
   * Defines the HTML path for the card using the AssetManager utility.
   *
   * @param {string} sectionName
   */
  // defineHtmlPath(sectionName) {
  //   AssetManager.updateHtml(`#card-link-a-${this.name}`, sectionName, this.name);
  // }
}

/**
 * Represents a section containing multiple card link items.
 *
 * @class
 */
class Section {
  /**
   * @param {Object} params
   * @param {string} params.name
   * @param {string} params.containerSelector
   * @param {Array<Item>} params.items
   */
  constructor(params) {
    this.name = params.name;
    this.containerSelector = params.containerSelector;
    this.items = params.items.map(
      (item) => new Item(item, this.containerElement)
    );
  }

  /**
   * Returns the container element for the section.
   *
   * @public
   * @type {HTMLElement}
   */
  get containerElement() {
    return document.querySelector(this.containerSelector);
  }

  /**
   * Renders all items in the section.
   *
   * @public
   */
  renderItems() {
    this.items.forEach((item) => {
      item.view.render();
    });
  }

  /**
   * Handles the configuration of paths icon for all items in the section.
   *
   * @public
   */
  assetHandler() {
    this.items.forEach((item) => {
      item.defineIconPath();
      // item.defineHtmlPath(this.name);
    });
  }

  /**
   * Initializes the section by rendering items and setting paths.
   *
   * @public
   */
  init() {
    this.renderItems();
    this.assetHandler();
  }
}
