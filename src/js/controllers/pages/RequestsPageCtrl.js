import { PageCtrl } from "./PageCtrl.js";
import { RequestsPageView } from "../../views/pages/RequestsPageView.js";
import { LoanRequest } from "../../models/display/LoanRequest.js";
import { LoanRequestsCtrl } from "../display/LoanRequestsCtrl.js";

// Change to component - form
import pathManager from "../../utils/PathManager.js";
import { ThemeView } from "../../views/layout/ThemeView.js";

export class RequestsPageCtrl extends PageCtrl {
  constructor() {
    super(RequestsPageView);
  }

  _initReceivedRequestsCtrl() {
    const data = [
      {
        id: 20,
        date: "23/07/2024",
        debtor: "Kate Denson",
        value: 4000,
        installments: 12,
        installmentValue: 400,
        rate: 2,
        status: 1,
        type: 2,
      },
      {
        id: 18,
        date: "03/09/2024",
        debtor: "Vitorio Toscano",
        value: 1000,
        installments: 12,
        installmentValue: 400,
        rate: 2,
        status: 1,
        type: 2,
      },
    ];

    const received = data.map(
      (req) =>
        new LoanRequest(
          req.id,
          req.type,
          req.status,
          req.debtor,
          null,
          req.date,
          req.value,
          req.installments,
          req.rate,
          req.installmentValue
        )
    );
    const container = document.querySelector(".received-requests__cards");
    const ctrl = new LoanRequestsCtrl(container, "received");
    received.forEach((req) => ctrl.addComponent(req));
    ctrl.renderComponents();
    // ctrl.clearComponents();
  }

  _initOpenedRequestsCtrl() {
    const data = [
      {
        id: 12,
        date: "23/07/2024",
        creditor: "Kate Denson",
        value: 4000,
        installments: 12,
        installmentValue: 200,
        rate: 2,
        status: 1,
        type: 1,
      },
      {
        id: 14,
        date: "03/09/2024",
        date: "23/07/2024",
        creditor: "Vitorio Toscano",
        value: 1000,
        installments: 12,
        installmentValue: 400,
        rate: 2,
        status: 2,
        type: 1,
      },
      {
        id: 15,
        date: "04/05/2024",
        creditor: "Meg Thomas",
        value: 5000,
        installments: 12,
        installmentValue: 300,
        rate: 2,
        status: 3,
        type: 1,
      },
    ];

    const requests = data.map(
      (req) =>
        new LoanRequest(
          req.id,
          req.type,
          req.status,
          null,
          req.creditor,
          req.date,
          req.value,
          req.installments,
          req.rate,
          req.installmentValue
        )
    );

    const container = document.querySelector(".open-requests__cards");
    const ctrl = new LoanRequestsCtrl(container, "opened");
    requests.forEach((req) => ctrl.addComponent(req));
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
