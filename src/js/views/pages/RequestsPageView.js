import { PageView } from "./PageView.js";

export class RequestsPageView extends PageView {
  constructor() {
    super();
  }

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
    <section class="section new-loan">
      <h2 class="section__h2">New Loan Request</h2>
      <p class="info-text">Provide the necessary information in the form and request a new loan.</p>
      ${this._createForm()}
    </section>
    `;
  }

  _createForm() {
    return `
    <form id="new-loan-form" class="form new-loan__form" action="/submit" method="post">
      <div class="form-group">
        <div class="form-group__input-group">
          <label for="search-creditor" class="label form-group__label">Search for a Creditor<label>
          <div class="form-group__input-container">
            <input id="search-creditor" type="text" name="creditor" placeholder="Search"aria-label="Search Creditor"
              class="input form-group__input">
            <button id="search-creditor-button" class="btn-unset form-group__button"aria-label="Search">
              <img id="search-creditor-icon" class="icon" alt="Search Icon">
            </button>
          </div>
        </div>
        <div class="form-group__input-group">
          <label for="value" class="label form-group__label">Value</label>
          <input id="value" type="number" name="value" placeholder="R$" aria-label="Loan Value"
            class="input form-group__input">
        </div>
        <div class="form-group__input-group">
          <label for="installments" class="label form-group__label">Installments<label>
          <input id="installments" type="number" name="installments" placeholder="Number of Installments"
            aria-label="Quantity of Installments" class="input form-group__input">
        </div>
        <div class="form-group__input-group">
          <label for="rate" class="label form-group__label">Interest Rate</label>
          <input id="rate" type="number" name="rate" placeholder="Rate in %"aria-label="Interest Rate"
            class="input form-group__input">
        </div>
      </div>
      <button class="btn btn-action">Request Loan</button>
    </form>
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
