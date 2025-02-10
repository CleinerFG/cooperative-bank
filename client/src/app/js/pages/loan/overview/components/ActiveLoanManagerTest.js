import LoanService from '../../../../services/LoanService.js';
import { LoanManager } from '../../LoanManager.js';
import { CardActiveLoan } from './CardActiveLoan.js';

/**
 * Manages a group of active loans data components.
 */
export default class ActiveLoanManager extends LoanManager {
  get _entityMap() {
    return {
      entity: 'active-loans',
      categories: [
        {
          name: 'payable',
          CardClass: CardActiveLoan,
        },
        {
          name: 'receivable',
          CardClass: CardActiveLoan,
        },
      ],
    };
  }

  async _fetchByCategory(category) {
    if (category === 'payable') {
      return LoanService.getActiveLoans('payable');
    }
    return LoanService.getActiveLoans('receivable');
  }

  get _cardSkelonRows() {
    return 7;
  }
}
