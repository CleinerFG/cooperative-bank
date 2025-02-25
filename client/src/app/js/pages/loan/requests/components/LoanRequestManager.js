import { LoanManager } from '../../LoanManager.js';
import LoanService from '../../../../services/LoanService.js';
import { CardLoanRequest } from './CardLoanRequest.js';

export default class LoanRequestsManager extends LoanManager {
  get _entityMap() {
    return {
      entity: 'loan-requests',
      categories: [
        {
          name: 'opened',
          CardClass: CardLoanRequest,
        },
        {
          name: 'received',
          CardClass: CardLoanRequest,
        },
      ],
    };
  }

  async _fetchService(category) {
    return category === 'opened'
      ? LoanService.getRequests('opened')
      : LoanService.getRequests('received');
  }

  get _cardSkelonRows() {
    return 2;
  }
}
