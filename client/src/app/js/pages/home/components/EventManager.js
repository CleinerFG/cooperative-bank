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

  get _entityCategoriesMap() {
    return [
      {
        name: 'payment',
        CardClass: CardEvent,
        endpoint: 'events/payment',
      },
      {
        name: 'investment',
        CardClass: CardEvent,
        endpoint: 'events/investment',
      },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no events...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
