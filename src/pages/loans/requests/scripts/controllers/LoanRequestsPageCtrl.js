import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { LoanRequestsPageView } from "../views/LoanRequestsPageView.js";
import { NewLoanRequestFormCtrl } from "./NewLoanRequestFormCtrl.js";
import { ReceivedRequestsCtrl } from "./ReceivedRequestsCtrl.js";
import { OpenedRequestsCtrl } from "./OpenedRequestsCtrl.js";

export class LoanRequestsPageCtrl extends PageCtrl {
  constructor() {
    super(LoanRequestsPageView);
  }

  _initFormCtrl() {
    new NewLoanRequestFormCtrl();
  }

  _initOpenedRequestsCtrl() {
    new OpenedRequestsCtrl();
  }

  _initReceivedRequestsCtrl() {
    new ReceivedRequestsCtrl()
  }

  _initControllers() {
    this._initFormCtrl();
    this._initOpenedRequestsCtrl();
    this._initReceivedRequestsCtrl();
  }
}
