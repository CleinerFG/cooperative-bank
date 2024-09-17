import { PageCtrl } from "../../../../../js/controllers/pages/PageCtrl.js";
import { LoanRequestsPageView } from "../views/LoanRequestsPageView.js";
// import { NewLoanRequestFormCtrl } from "../forms/NewLoanRequestFormCtrl.js";
// import { LoanRequestsCtrl } from "../LoanRequestsCtrl.js";
// import { openedRequestsData, receivedRequestsData } from "../../testData.js";

export class LoanRequestsPageCtrl extends PageCtrl {
  constructor() {
    super(LoanRequestsPageView);
  }

  // _initFormCtrl() {
  //   new NewLoanRequestFormCtrl();
  // }

  // _initOpenedRequestsCtrl() {
  //   const ctrl = new LoanRequestsCtrl("opened");
  //   openedRequestsData.forEach((req) => ctrl.addComponent(req));
  //   ctrl.renderComponents();
  //   // ctrl.clearComponents();
  // }

  // _initReceivedRequestsCtrl() {
  //   const ctrl = new LoanRequestsCtrl("received");
  //   receivedRequestsData.forEach((req) => ctrl.addComponent(req));
  //   ctrl.renderComponents();
  //   // ctrl.clearComponents();
  // }

  _initControllers() {
    // this._initFormCtrl();
    // this._initOpenedRequestsCtrl();
    // this._initReceivedRequestsCtrl();
  }
}
