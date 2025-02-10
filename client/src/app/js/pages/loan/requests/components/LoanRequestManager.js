import { LoanManager } from '../../LoanManager.js';
import LoanService from '../../../../services/LoanService.js';
import { CardLoanRequestReceived } from './CardLoanRequestReceived.js';
import { CardLoanRequestOpened } from './CardLoanRequestOpened.js';

export default class LoanRequestsManager extends LoanManager {
  get _entityMap() {
    return {
      entity: 'loan-requests',
      categories: [
        {
          name: 'opened',
          CardClass: CardLoanRequestOpened,
        },
        {
          name: 'received',
          CardClass: CardLoanRequestReceived,
        },
      ],
    };
  }

  async _fetchByCategory(category) {
    if (category === 'opened') {
      return LoanService.getLoanRequests('opened');
    }
    return LoanService.getLoanRequests('received');
  }

  get _cardSkelonRows() {
    return 6;
  }
}
