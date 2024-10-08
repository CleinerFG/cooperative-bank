import { ComponentGroupCtrl } from "../../../../../js/controllers/ComponentGroupCtrl.js";
import { ReceivedRequestCtrl } from "./ReceivedRequestCtrl.js";

export class ReceivedRequestGroupCtrl extends ComponentGroupCtrl {
  constructor() {
    const container = document.querySelector(".received-requests__cards");
    super(container);
  }

  get _ComponentCtrlClass() {
    return ReceivedRequestCtrl;
  }

  get _category() {
    return "received-requests";
  }

  get _endpoint() {
    return "received-requests";
  }

  get _emptyCardsTexts() {
    return ["There are no received requests..."];
  }
}
