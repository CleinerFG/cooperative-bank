import { PageView } from "../../../../../js/views/PageView.js";

export class OverviewPageView extends PageView {
  _createSectionInitial() {
    return `
    <section class="section">
      <h1 class="section__h1">Loans Overview</h1>
      <p class="info-text">Report of all active loans.</p>
    </section>
    `;
  }

  _createSectionReceivables() {
    return `
    <section class="section Receivables">
      <h2 class="section__h2">Receivables</h2>
      <div class="cards receivables__cards"></div>
      <p class="info-text">Total to Receive: "Must be implemented"</p>
    </section>
    `;
  }

  _createSectionPayables() {
    return `
    <section class="section Payables">
      <h2 class="section__h2">Payables</h2>
      <div class="cards payables__cards"></div>
      </div>
      <p class="info-text">Total to Pay: "Must be implemented"</p>
    </section>
    `;
  }

  _pageContent() {
    const content = `
    ${this._createSectionInitial()}
    ${this._createSectionReceivables()}
    ${this._createSectionPayables()}
    `;
    return content;
  }
}
