import { PageView } from '../../../views/PageView.js';
import { LoanRequestGroup } from './components/LoanRequestGroup.js';
import { NewLoanRequestFormCtrl } from './controllers/NewLoanRequestFormCtrl.js';

export class LoanRequestsPageView extends PageView {
  /**
   * Returns the HTML string for the initial section that introduces the loan process.
   * Includes information about the steps required for a loan request.
   *
   * @protected
   * @type {string}
   */
  get _templateSectionInitial() {
    return `
    <section class="section">
      <h1 class="section__h1">Take Out a Loan</h1>
      <p class="info-text">To obtain a loan, the creditor needs to access their own account and accept the loan request.
      </p>
    </section>

    `;
  }

  /**
   * Returns the HTML string for the section related to initiating a new loan request.
   * Contains instructions for completing the loan application form.
   *
   * @protected
   * @type {string}
   */
  get _templateSectionNewLoan() {
    return `
    <section class="section new-request">
      <h2 class="section__h2">New Loan Request</h2>
      <p class="info-text">Provide the necessary information in the form and request a new loan.</p>
    </section>
    `;
  }

  /**
   * Returns the HTML string for displaying the section of existing loan requests.
   *
   * @protected
   * @type {string}
   */
  get _templateSectionLoanRequests() {
    return `
    <section class="section loan-requests">
      <h2 class="section__h2">Loan Requests</h2>
    </section>
    `;
  }

  get _template() {
    return `
    ${this._templateSectionInitial}
    ${this._templateSectionNewLoan}
    ${this._templateSectionLoanRequests}
    `;
  }

  get _pageTitle(){
    return 'Loan Requests'
  }

  _initComponents() {
    new NewLoanRequestFormCtrl();
    new LoanRequestGroup();
  }
}
