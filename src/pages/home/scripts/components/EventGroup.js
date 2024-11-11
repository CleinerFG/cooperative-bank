import { ComponentGroup } from '../../../../js/components/ComponentGroup.js';
import { CardEvent } from './CardEvent.js';

/**
 * Manages a group of events data components.
 * This class configures specific card types, categories, and default messages.
 *
 * @class
 * @extends ComponentGroup
 */
export class EventGroup extends ComponentGroup {
  constructor() {
    const container = document.querySelector('.section.events');
    super(container);
  }

  get _CardComponentClass() {
    return CardEvent;
  }

  get _category() {
    return 'events';
  }

  get _typeMappingConfig() {
    return [
      { name: 'payment', endpoint: 'events-payment' },
      { name: 'investment', endpoint: 'events-investment' },
    ];
  }

  get _emptyCardsTexts() {
    return [
      'There are no events...',
      "When there is news, we'll let you know ; )",
    ];
  }
}
