import { LoanRequestView } from "../views/LoanRequestView.js"
import { NoEventsView } from "../views/NoEventsView.js";
import pathManager from "../utils/PathManager.js";

export class LoanRequestController {
  constructor(container) {
    this._container = container;
    this._requests = [];
    this._pathManager = pathManager;
  }

  _createLoanRequestView(loanRequest) {
    return new LoanRequestView(loanRequest, this._container);
  }

  _createNoEventsView() {
    return new NoEventsView(this._container, this._pathManager);
  }

  _renderRequestView(loanRequestView) {
    loanRequestView.render();
  }

  _noRequestsHandler() {
    if (!this._requests.length) {
      const t1 = "There are no opened requests...";
      const noEventView = this._createNoEventsView();
      noEventView.render(t1);
    }
  }

  addLoanRequest(loanRequest) {
    const loanRequestView = this._createLoanRequestView(loanRequest);
    this._requests.push(loanRequestView);
  }

  renderRequests() {
    this._noRequestsHandler();
    this._requests.forEach((req) => this._renderRequestView(req));
  }

  clearRequests() {
    this._requests = [];
    this._container.innerHTML = "";
    this._noRequestsHandler();
  }
}



