import { PageCtrl } from "./PageCtrl.js";
import { RequestsPageView } from "../../views/pages/RequestsPageView.js";
import { LoanRequestsCtrl } from "../display/LoanRequestsCtrl.js";
import { openedRequestsData, receivedRequestsData } from "../../testData.js";

// Change to component - form
import pathManager from "../../utils/PathManager.js";
import { ThemeView } from "../../views/layout/ThemeView.js";

export class RequestsPageCtrl extends PageCtrl {
  constructor() {
    super(RequestsPageView);
  }

  _initReceivedRequestsCtrl() {
    const container = document.querySelector(".received-requests__cards");
    const ctrl = new LoanRequestsCtrl(container, "received");
    receivedRequestsData.forEach((req) => ctrl.addComponent(req));
    ctrl.renderComponents();
    // ctrl.clearComponents();
  }

  _initOpenedRequestsCtrl() {
    const container = document.querySelector(".open-requests__cards");
    const ctrl = new LoanRequestsCtrl(container, "opened");
    openedRequestsData.forEach((req) => ctrl.addComponent(req));
    ctrl.renderComponents();
    // ctrl.clearComponents();
  }

  _initPathManager() {
    pathManager.updatePath(
      "asset",
      "#search-creditor-icon",
      "icons",
      "icon-search.svg"
    );
  }

  _initPathManager() {
    const theme = ThemeView.getStoredTheme();
    pathManager.updatePath(
      "asset",
      "#search-creditor-icon",
      `icons${theme}`,
      "icon-search.svg"
    );
  }

  _initControllers() {
    this._initReceivedRequestsCtrl();
    this._initOpenedRequestsCtrl();

    //change to component
    this._initPathManager();
  }
}
