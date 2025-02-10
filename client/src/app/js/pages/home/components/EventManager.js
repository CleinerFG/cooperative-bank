import { CardManager } from '../../../core/CardManager.js';
import EventService from '../../../services/EventService.js';
import { CardEvent } from './CardEvent.js';

/**
 * @note Events are notifications, soon implementation
 */
export default class EventManager extends CardManager {
  constructor() {
    super();
    this._init();
  }

  get _containerElement() {
    return document.querySelector('.section.events');
  }

  get _entityMap() {
    return {
      entity: 'events',
      categories: [
        {
          name: 'payment',
          CardClass: CardEvent,
        },
        {
          name: 'investment',
          CardClass: CardEvent,
        },
      ],
    };
  }

  async _fetchByCategory(category) {
    if (category === 'payment') {
      return EventService.getPayments();
    }
    return EventService.getInvestments();
  }

  get _cardSkelonRows() {
    return 2;
  }

  async _init() {
    await super._init();
    // Test render
    this.renderCards('payment');
  }
}
