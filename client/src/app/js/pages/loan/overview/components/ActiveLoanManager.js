import { CardManager } from '../../../../components/CardManager.js';
import { CardActiveLoan } from './CardActiveLoan.js';

/**
 * Manages a group of active loans data components.
 */
export default class ActiveLoanManager extends CardManager {
  get _containerElement() {
    return document.querySelector('.section.active-loans');
  }

  get _CardClass() {
    return CardActiveLoan;
  }

  get _entity() {
    return 'active-loans';
  }

  get _cardSkelonRows() {
    return 7;
  }

  get _entityCategoriesMap() {
    return [
      {
        name: 'payables',
        CardClass: CardActiveLoan,
        endpoint: '/loan/overview/payable',
      },
      {
        name: 'receivables',
        CardClass: CardActiveLoan,
        endpoint: '/loan/overview/receivable',
      },
    ];
  }
}
