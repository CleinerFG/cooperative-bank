import { PageView } from "./PageView.js";

export class RequestsPageView extends PageView {
  _createSectionTakeOut() {
    return `
    <section class="section">
      <h1 class="section__h1">Take Out a Loan</h1>
      <p class="info-text">To obtain a loan, the creditor needs to access their own account and accept the loan request.
      </p>
    </section>

    `;
  }

  _createSectionNewLoan() {
    return `
    <section class="section new-request">
      <h2 class="section__h2">New Loan Request</h2>
      <p class="info-text">Provide the necessary information in the form and request a new loan.</p>
    </section>
    `;
  }

  _createSectionOpened() {
    return `
    <section class="section open-requests">
      <h2 class="section__h2">Opened Requests</h2>
      <div class="cards open-requests__cards">
      </div>
    </section>
    `;
  }

  _createSectionReceived() {
    return `
    <section class="section received-requests">
      <h2 class="section__h2">Received Requests</h2>
      <div class="cards received-requests__cards">
      </div>
    </section>
    `;
  }

  _pageContent() {
    const content = `
    ${this._createSectionTakeOut()}
    ${this._createSectionNewLoan()}
    ${this._createSectionOpened()}
    ${this._createSectionReceived()}
    `;
    return content;
  }
}
