import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { LoanRequestsPageView } from "../views/LoanRequestsPageView.js";
import { NewLoanRequestFormCtrl } from "./NewLoanRequestFormCtrl.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";
import { LoanRequestsCtrl } from "./LoanRequestsCtrl.js";
import {
  apiDataOpenedRequests,
  apiDataReceivedRequests,
} from "../../../../../js/testData.js";

export class LoanRequestsPageCtrl extends PageCtrl {
  constructor() {
    super(LoanRequestsPageView);
  }

  _initFormCtrl() {
    new NewLoanRequestFormCtrl();
  }

  _initOpenedRequestsCtrl() {
    const ctrl = new LoanRequestsCtrl("opened");
    apiDataOpenedRequests.forEach((params) => ctrl.addComponent(new LoanRequestModel(params)));
    ctrl.renderComponents();
    // ctrl.clearComponents();
  }

  _initReceivedRequestsCtrl() {
    const ctrl = new LoanRequestsCtrl("received");
    apiDataReceivedRequests.forEach((params) => ctrl.addComponent(new LoanRequestModel(params)));
    ctrl.renderComponents();
    // ctrl.clearComponents();
  }

  _initControllers() {
    this._initFormCtrl();
    this._initOpenedRequestsCtrl();
    this._initReceivedRequestsCtrl();
  }
}
