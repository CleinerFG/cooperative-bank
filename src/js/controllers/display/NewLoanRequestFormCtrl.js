import { DisplayFormCtrl } from "./DisplayFormCtrl.js";
import { NewLoanRequestFormView } from "../../views/display/NewLoanRequestFormView.js";
import { SearchInputCtrl } from "./SearchInputCtrl.js";

export class NewLoanRequestFormCtrl extends DisplayFormCtrl {
  constructor(container) {
    super(
      NewLoanRequestFormView,
      container,
      "new-request-form",
      "new-request",
      "/",
      "post"
    );
  }

  _initSearchInputCtrl() {
    const inp = document.querySelector("#creditor");
    const resList = document.querySelector("#research-ul");
    new SearchInputCtrl(inp, resList, "creditor");
  }

  _initControllers() {
    this._initSearchInputCtrl();
  }
}
