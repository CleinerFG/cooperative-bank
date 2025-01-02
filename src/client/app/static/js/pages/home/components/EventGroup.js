import { ComponentGroup } from '../../../components/ComponentGroup.js';
import { CardEvent } from './CardEvent.js';

/**
 * Manages a group of events data components.
 */
export default class EventGroup extends ComponentGroup {
  get _containerElement() {
    return document.querySelector('.section.events');
  }

  get _category() {
    return 'events';
  }

  get _typeMappingConfig() {
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
      'There are no events...',
      "When there is news, we'll let you know ; )",
    ];
  }
}
