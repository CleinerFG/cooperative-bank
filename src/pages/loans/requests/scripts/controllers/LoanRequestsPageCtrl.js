import { PageCtrl } from "../../../../../js/controllers/PageCtrl.js";
import { LoanRequestsPageView } from "../views/LoanRequestsPageView.js";
import { NewLoanRequestFormCtrl } from "./NewLoanRequestFormCtrl.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";
import { ReceivedRequestsCtrl } from "./ReceivedRequestsCtrl.js";
import { OpenedRequestsCtrl } from "./OpenedRequestsCtrl.js";
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
    const ctrl = new OpenedRequestsCtrl();
    apiDataOpenedRequests.forEach((params) =>
      ctrl.addComponent(new LoanRequestModel(params))
    );
    ctrl.initComponents();
    // ctrl.clearComponents();
  }

  _initReceivedRequestsCtrl() {
    const ctrl = new ReceivedRequestsCtrl();
    apiDataReceivedRequests.forEach((params) =>
      ctrl.addComponent(new LoanRequestModel(params))
    );
    ctrl.initComponents();
    // ctrl.clearComponents();
  }

  _initControllers() {
    this._initFormCtrl();
    this._initOpenedRequestsCtrl();
    this._initReceivedRequestsCtrl();
  }
}
