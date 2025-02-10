import { CardManager } from '../../../core/CardManager.js';
import { CardEvent } from './CardEvent.js';
export default class EventManager extends CardManager {
  constructor() {
    super();
    this._init();
  }

  get _containerElement() {
    console.log('afkjoashfg');
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
    // if (category === 'payment') {
    //   return EventService.getLoanRequests('payment');
    // }
    // return EventService.getLoanRequests('investment');
  }

  get _cardSkelonRows() {
    return 2;
  }
}
