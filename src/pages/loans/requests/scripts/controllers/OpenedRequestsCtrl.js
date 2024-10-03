import { ComponentsCtrl } from "../../../../../js/controllers/ComponentsCtrl.js";
import { OpenedRequestView } from "../views/OpenedRequestView.js";
import { LoanRequestModel } from "../models/LoanRequestModel.js";

export class OpenedRequestsCtrl extends ComponentsCtrl {
  constructor() {
    const container = document.querySelector(".open-requests__cards");
    super(container, OpenedRequestView, LoanRequestModel, "opened");
  }

  get _endpoint() {
    return "opened-requests";
  }

  _defineEmptyCardsTexts() {
    const t1 = `There are no opened requests...`;
    super._defineEmptyCardsTexts(t1);
  }
}
