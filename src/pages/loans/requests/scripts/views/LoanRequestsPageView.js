import { PageView } from "../../../../../js/views/PageView.js";

export class LoanRequestsPageView extends PageView {
  get _templateSectionInitial() {
    return `
    <section class="section">
      <h1 class="section__h1">Take Out a Loan</h1>
      <p class="info-text">To obtain a loan, the creditor needs to access their own account and accept the loan request.
      </p>
    </section>

    `;
  }

  get _templateSectionNewLoan() {
    return `
    <section class="section new-request">
      <h2 class="section__h2">New Loan Request</h2>
      <p class="info-text">Provide the necessary information in the form and request a new loan.</p>
    </section>
    `;
  }

  get _templateSectionLoanRequests() {
    return `
    <section class="section loan-requests">
      <h2 class="section__h2">Loan Requests</h2>
    </section>
    `;
  }

  _pageContent() {
    return `
    ${this._templateSectionInitial}
    ${this._templateSectionNewLoan}
    ${this._templateSectionLoanRequests}
    `;
  }
}
