import { CardManager } from '../../../../../js/components/CardManager.js';
import { CardLoanRequestReceived } from './CardLoanRequestReceived.js';
import { CardLoanRequestOpened } from './CardLoanRequestOpened.js';

/**
 * Manages a group of loan requests data components.
 */
export default class LoanRequestManager extends CardManager {
  get _containerElement() {
    return document.querySelector('.section.loan-requests');
  }

  get _entity() {
    return 'loan-requests';
  }

  get _entityCategoriesMap() {
    return [
      {
        name: 'received',
        CardClass: CardLoanRequestReceived,
        endpoint: 'loan/request/received',
      },
      {
        name: 'opened',
        CardClass: CardLoanRequestOpened,
        endpoint: 'loan/request/opened',
      },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no requests...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
