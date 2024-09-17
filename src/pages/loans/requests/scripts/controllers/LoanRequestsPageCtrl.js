import { PageCtrl } from "./PageCtrl.js";
import { RequestsPageView } from "../../views/pages/RequestsPageView.js";
import { NewLoanRequestFormCtrl } from "../forms/NewLoanRequestFormCtrl.js";
import { LoanRequestsCtrl } from "../LoanRequestsCtrl.js";
import { openedRequestsData, receivedRequestsData } from "../../testData.js";

export class LoanRequestsPageCtrl extends PageCtrl {
  constructor() {
    super(RequestsPageView);
  }

  _initFormCtrl() {
    new NewLoanRequestFormCtrl();
  }

  _initOpenedRequestsCtrl() {
    const ctrl = new LoanRequestsCtrl("opened");
    openedRequestsData.forEach((req) => ctrl.addComponent(req));
    ctrl.renderComponents();
    // ctrl.clearComponents();
  }

  _initReceivedRequestsCtrl() {
    const ctrl = new LoanRequestsCtrl("received");
    receivedRequestsData.forEach((req) => ctrl.addComponent(req));
    ctrl.renderComponents();
    // ctrl.clearComponents();
  }

  _initControllers() {
    this._initFormCtrl();
    this._initOpenedRequestsCtrl();
    this._initReceivedRequestsCtrl();
  }
}
