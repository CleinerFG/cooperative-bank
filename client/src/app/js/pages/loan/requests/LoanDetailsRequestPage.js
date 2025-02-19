import LoanDetailsPage from '../LoanDetailsPage.js';
import loanService from '../../../services/LoanService.js';

export default class LoanDetailsRequestPage extends LoanDetailsPage {
  _fetchService(id) {
      return loanService.getLoanDetailsRequest(id);
    }

  _setCustomConfig() {}
}
