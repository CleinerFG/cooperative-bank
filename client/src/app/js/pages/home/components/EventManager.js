import { CardManager } from '../../../components/CardManager.js';
import { CardEvent } from './CardEvent.js';

/**
 * Manages a group of events data components.
 */
export default class EventManager extends CardManager {
  get _containerElement() {
    return document.querySelector('.section.events');
  }

  get _entity() {
    return 'events';
  }

  get _cardSkelonRows() {
    return 2;
  }

  get _entityCategoriesMap() {
    return [
      {
        name: 'payment',
        CardClass: CardEvent,
        endpoint: '/events/payment',
      },
      {
        name: 'investment',
        CardClass: CardEvent,
        endpoint: '/events/investment',
      },
    ];
  }

  get _useDateFilter() {
    return false;
  }
}
