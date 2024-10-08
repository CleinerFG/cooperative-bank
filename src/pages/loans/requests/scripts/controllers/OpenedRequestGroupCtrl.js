import { ComponentGroupCtrl } from "../../../../../js/controllers/ComponentGroupCtrl.js";
import { OpenedRequestCtrl } from "./OpenedRequestCtrl.js";

export class OpenedRequestGroupCtrl extends ComponentGroupCtrl {
  constructor() {
    const container = document.querySelector(".opened-requests__cards");
    super(container);
  }

  get _ComponentCtrlClass() {
    return OpenedRequestCtrl;
  }

  get _category() {
    return "opened-requests";
  }

  get _endpoint() {
    return "opened-requests";
  }

  get _emptyCardsTexts() {
    return ["There are no opened requests..."];
  }
}
